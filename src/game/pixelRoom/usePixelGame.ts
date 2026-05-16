import { useCallback, useEffect, useRef, useState } from "react";
import {
  INTERACTABLES,
  INTERACT_RADIUS,
  Interactable,
  MAP_COLS,
  MAP_ROWS,
  PLAYER_SIZE,
  PLAYER_START,
  TILE_SIZE,
  getTileAt,
  isSolidTile,
} from "./roomData";

const SPEED = 140;

type Facing = "down" | "up" | "left" | "right";

function trackKey(keys: Set<string>, e: KeyboardEvent, down: boolean) {
  const key = e.key.toLowerCase();
  const code = e.code;
  if (down) {
    keys.add(key);
    if (code) keys.add(code);
  } else {
    keys.delete(key);
    if (code) keys.delete(code);
  }
}

function isKeyHeld(keys: Set<string>, ...ids: string[]): boolean {
  return ids.some((id) => keys.has(id));
}

function collidesAt(px: number, py: number): boolean {
  const corners = [
    { x: px + 2, y: py + 2 },
    { x: px + PLAYER_SIZE.w - 2, y: py + 2 },
    { x: px + 2, y: py + PLAYER_SIZE.h - 2 },
    { x: px + PLAYER_SIZE.w - 2, y: py + PLAYER_SIZE.h - 2 },
  ];

  for (const { x, y } of corners) {
    const col = Math.floor(x / TILE_SIZE);
    const row = Math.floor(y / TILE_SIZE);
    if (isSolidTile(getTileAt(col, row))) return true;
  }
  return false;
}

function tryMove(
  x: number,
  y: number,
  dx: number,
  dy: number
): { x: number; y: number } {
  const maxX = MAP_COLS * TILE_SIZE - PLAYER_SIZE.w;
  const maxY = MAP_ROWS * TILE_SIZE - PLAYER_SIZE.h;
  let nextX = Math.max(0, Math.min(maxX, x + dx));
  let nextY = Math.max(0, Math.min(maxY, y + dy));

  if (!collidesAt(nextX, y)) {
    // ok
  } else {
    nextX = x;
  }

  if (!collidesAt(nextX, nextY)) {
    // ok
  } else {
    nextY = y;
  }

  return { x: nextX, y: nextY };
}

function findNearby(px: number, py: number): Interactable | null {
  const cx = px + PLAYER_SIZE.w / 2;
  const cy = py + PLAYER_SIZE.h / 2;
  let closest: Interactable | null = null;
  let best = INTERACT_RADIUS;

  for (const item of INTERACTABLES) {
    const ix = item.x + item.width / 2;
    const iy = item.y + item.height / 2;
    const dist = Math.hypot(cx - ix, cy - iy);
    if (dist < best) {
      best = dist;
      closest = item;
    }
  }
  return closest;
}

export function usePixelGame() {
  const [pos, setPos] = useState(PLAYER_START);
  const posRef = useRef(PLAYER_START);
  const [facing, setFacing] = useState<Facing>("down");
  const [walking, setWalking] = useState(false);
  const [animFrame, setAnimFrame] = useState(0);
  const [nearby, setNearby] = useState<Interactable | null>(null);
  const [activeModal, setActiveModal] = useState<Interactable | null>(null);

  const keysRef = useRef(new Set<string>());
  const animRef = useRef(0);
  const activeModalRef = useRef(false);
  const facingRef = useRef<Facing>("down");
  const walkingRef = useRef(false);

  activeModalRef.current = activeModal !== null;

  const tryInteract = useCallback(() => {
    if (activeModalRef.current) return;
    const near = findNearby(posRef.current.x, posRef.current.y);
    if (near) setActiveModal(near);
  }, []);

  const closeModal = useCallback(() => setActiveModal(null), []);

  const registerKey = useCallback((e: KeyboardEvent, down: boolean) => {
    const key = e.key.toLowerCase();
    trackKey(keysRef.current, e, down);

    if (!down) return;

    if (key === "e" || key === " ") {
      e.preventDefault();
      tryInteract();
      return;
    }

    if (
      isKeyHeld(
        keysRef.current,
        "w",
        "KeyW",
        "a",
        "KeyA",
        "s",
        "KeyS",
        "d",
        "KeyD",
        "arrowup",
        "ArrowUp",
        "arrowdown",
        "ArrowDown",
        "arrowleft",
        "ArrowLeft",
        "arrowright",
        "ArrowRight"
      )
    ) {
      e.preventDefault();
    }
  }, [tryInteract]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => registerKey(e, true);
    const onKeyUp = (e: KeyboardEvent) => registerKey(e, false);
    const clearKeys = () => keysRef.current.clear();

    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("blur", clearKeys);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("keyup", onKeyUp, true);
      window.removeEventListener("blur", clearKeys);
    };
  }, [registerKey]);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const keys = keysRef.current;
      let dx = 0;
      let dy = 0;

      if (isKeyHeld(keys, "a", "KeyA", "arrowleft", "ArrowLeft")) dx -= 1;
      if (isKeyHeld(keys, "d", "KeyD", "arrowright", "ArrowRight")) dx += 1;
      if (isKeyHeld(keys, "w", "KeyW", "arrowup", "ArrowUp")) dy -= 1;
      if (isKeyHeld(keys, "s", "KeyS", "arrowdown", "ArrowDown")) dy += 1;

      const len = Math.hypot(dx, dy);
      const canMove = len > 0 && !activeModalRef.current;

      if (canMove) {
        const stepX = (dx / len) * SPEED * dt;
        const stepY = (dy / len) * SPEED * dt;

        const nextFacing: Facing =
          Math.abs(dx) > Math.abs(dy)
            ? dx > 0
              ? "right"
              : "left"
            : dy > 0
              ? "down"
              : "up";

        if (facingRef.current !== nextFacing) {
          facingRef.current = nextFacing;
          setFacing(nextFacing);
        }

        if (!walkingRef.current) {
          walkingRef.current = true;
          setWalking(true);
        }

        animRef.current += dt;
        if (animRef.current > 0.15) {
          animRef.current = 0;
          setAnimFrame((f) => (f + 1) % 2);
        }

        const { x, y } = posRef.current;
        const next = tryMove(x, y, stepX, stepY);

        if (next.x !== x || next.y !== y) {
          posRef.current = next;
          setPos(next);
        }
      } else if (walkingRef.current) {
        walkingRef.current = false;
        setWalking(false);
      }

      const near = findNearby(posRef.current.x, posRef.current.y);
      setNearby((prev) => (prev?.id === near?.id ? prev : near));

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = useCallback((dx: number, dy: number) => {
    if (activeModalRef.current) return;
    const { x, y } = posRef.current;
    const next = tryMove(x, y, dx * SPEED * 0.12, dy * SPEED * 0.12);

    if (next.x !== x || next.y !== y) {
      posRef.current = next;
      setPos(next);
      const nf: Facing =
        Math.abs(dx) > Math.abs(dy)
          ? dx > 0
            ? "right"
            : "left"
          : dy > 0
            ? "down"
            : "up";
      facingRef.current = nf;
      setFacing(nf);
      setWalking(true);
      walkingRef.current = true;
    }
  }, []);

  const holdMoveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startHoldMove = useCallback(
    (dx: number, dy: number) => {
      if (holdMoveRef.current) clearInterval(holdMoveRef.current);
      nudge(dx, dy);
      holdMoveRef.current = setInterval(() => nudge(dx, dy), 50);
    },
    [nudge]
  );

  const stopHoldMove = useCallback(() => {
    if (holdMoveRef.current) {
      clearInterval(holdMoveRef.current);
      holdMoveRef.current = null;
    }
    walkingRef.current = false;
    setWalking(false);
  }, []);

  useEffect(() => () => stopHoldMove(), [stopHoldMove]);

  return {
    pos,
    facing,
    walking,
    animFrame,
    nearby,
    activeModal,
    tryInteract,
    closeModal,
    nudge,
    startHoldMove,
    stopHoldMove,
    registerKey,
  };
}

export function getCameraOffset(
  playerX: number,
  playerY: number,
  viewportW: number,
  viewportH: number
) {
  const worldW = MAP_COLS * TILE_SIZE;
  const worldH = MAP_ROWS * TILE_SIZE;

  if (viewportW <= 0 || viewportH <= 0) {
    return { x: 0, y: 0 };
  }

  const playerCenterX = playerX + PLAYER_SIZE.w / 2;
  const playerCenterY = playerY + PLAYER_SIZE.h / 2;

  let camX = viewportW / 2 - playerCenterX;
  let camY = viewportH / 2 - playerCenterY;

  if (worldW <= viewportW) {
    camX = (viewportW - worldW) / 2;
  } else {
    camX = Math.min(0, Math.max(viewportW - worldW, camX));
  }

  if (worldH <= viewportH) {
    camY = (viewportH - worldH) / 2;
  } else {
    camY = Math.min(0, Math.max(viewportH - worldH, camY));
  }

  return { x: camX, y: camY };
}
