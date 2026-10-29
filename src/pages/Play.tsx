import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  INTERACTABLES,
  MAP_COLS,
  MAP_ROWS,
  TILE,
  TILE_MAP,
  TILE_SIZE,
  PLAYER_SIZE,
  type Interactable,
} from "../game/pixelRoom/roomData";
import { ROOM_PROPS } from "../game/pixelRoom/roomDecorations";
import { getCameraOffset, usePixelGame } from "../game/pixelRoom/usePixelGame";
import "./Play.css";

const TILE_CLASS: Record<number, string> = {
  [TILE.WALL]: "tile-wall",
  [TILE.WOOD]: "tile-wood",
  [TILE.RUG]: "tile-rug",
  [TILE.BOOKSHELF]: "tile-bookshelf",
  [TILE.DESK]: "tile-desk",
  [TILE.COMPUTER]: "tile-computer",
  [TILE.PLANT]: "tile-plant",
  [TILE.WINDOW]: "tile-window",
  [TILE.CHAIR]: "tile-chair",
  [TILE.SOFA]: "tile-sofa",
  [TILE.COFFEE]: "tile-coffee",
  [TILE.LAMP]: "tile-lamp",
  [TILE.MAT]: "tile-mat",
};

const Play = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState({ w: 640, h: 448 });
  const {
    pos,
    facing,
    walking,
    animFrame,
    nearby,
    activeModal,
    tryInteract,
    closeModal,
    startHoldMove,
    stopHoldMove,
    registerKey,
  } = usePixelGame();

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      setViewportSize({ w: el.clientWidth, h: el.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.focus({ preventScroll: true });

    return () => ro.disconnect();
  }, []);

  const camera = getCameraOffset(pos.x, pos.y, viewportSize.w, viewportSize.h);

  return (
    <div className="play-page pixel-play-page">
      <div className="play-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>

      <div className="pixel-layout">
        <div className="pixel-intro">
          <h1>
            Pixel <span>Makram</span>
          </h1>
          <p>
            Click the room, then use <kbd>WASD</kbd> or arrow keys to walk. Press{" "}
            <kbd>E</kbd> near objects to learn more.
          </p>
        </div>

        <div className="pixel-game-wrap">
          <div
            ref={viewportRef}
            className="pixel-viewport"
            role="application"
            aria-label="Pixel Makram room"
            tabIndex={0}
            onClick={() => viewportRef.current?.focus({ preventScroll: true })}
            onKeyDown={(e) => registerKey(e.nativeEvent, true)}
            onKeyUp={(e) => registerKey(e.nativeEvent, false)}
          >
            <div
              className="pixel-world"
              style={{
                width: MAP_COLS * TILE_SIZE,
                height: MAP_ROWS * TILE_SIZE,
                transform: `translate(${camera.x}px, ${camera.y}px)`,
              }}
            >
              <div className="pixel-tiles" aria-hidden="true">
                {TILE_MAP.map((row, rowIndex) =>
                  row.map((tile, colIndex) => (
                    <div
                      key={`${colIndex}-${rowIndex}`}
                      className={`pixel-tile ${TILE_CLASS[tile] ?? "tile-wood"}`}
                      style={{
                        left: colIndex * TILE_SIZE,
                        top: rowIndex * TILE_SIZE,
                        width: TILE_SIZE,
                        height: TILE_SIZE,
                      }}
                    />
                  ))
                )}
              </div>

              <div className="pixel-props" aria-hidden="true">
                {ROOM_PROPS.map((prop) => (
                  <div
                    key={prop.id}
                    className={`pixel-prop pixel-prop--${prop.type}${prop.flip ? " is-flip" : ""}`}
                    style={{ left: prop.x, top: prop.y }}
                  />
                ))}
              </div>

              {INTERACTABLES.map((item) => (
                <div
                  key={item.id}
                  className={`pixel-hotspot ${nearby?.id === item.id ? "is-near" : ""}`}
                  style={{
                    left: item.x,
                    top: item.y,
                    width: item.width,
                    height: item.height,
                  }}
                  aria-hidden="true"
                >
                  <span className="pixel-hotspot-label">{item.prompt}</span>
                </div>
              ))}

              <div
                className={`pixel-player facing-${facing} ${walking ? "is-walking" : ""} frame-${animFrame}`}
                style={{
                  left: pos.x + PLAYER_SIZE.w / 2,
                  top: pos.y + PLAYER_SIZE.h,
                }}
                aria-label="Makram"
              >
                <div className="pixel-player-sprite" />
              </div>
            </div>

            {nearby && !activeModal && (
              <div className="pixel-prompt" role="status">
                Press <kbd>E</kbd>  {nearby.prompt}
              </div>
            )}
          </div>

          <div className="pixel-touch-controls" aria-label="Movement controls">
            <button
              type="button"
              className="pixel-pad pixel-pad-up"
              aria-label="Move up"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                startHoldMove(0, -1);
              }}
              onPointerUp={stopHoldMove}
              onPointerCancel={stopHoldMove}
            >
              ▲
            </button>
            <button
              type="button"
              className="pixel-pad pixel-pad-left"
              aria-label="Move left"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                startHoldMove(-1, 0);
              }}
              onPointerUp={stopHoldMove}
              onPointerCancel={stopHoldMove}
            >
              ◀
            </button>
            <button type="button" className="pixel-pad pixel-pad-action" onPointerDown={tryInteract} aria-label="Interact">
              E
            </button>
            <button
              type="button"
              className="pixel-pad pixel-pad-right"
              aria-label="Move right"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                startHoldMove(1, 0);
              }}
              onPointerUp={stopHoldMove}
              onPointerCancel={stopHoldMove}
            >
              ▶
            </button>
            <button
              type="button"
              className="pixel-pad pixel-pad-down"
              aria-label="Move down"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                startHoldMove(0, 1);
              }}
              onPointerUp={stopHoldMove}
              onPointerCancel={stopHoldMove}
            >
              ▼
            </button>
          </div>
        </div>

        <div className="pixel-legend">
          {INTERACTABLES.map((item) => (
            <span key={item.id} className="pixel-legend-item">
              {item.prompt}
            </span>
          ))}
        </div>
      </div>

      {activeModal && (
        <InteractModal item={activeModal} onClose={closeModal} />
      )}
    </div>
  );
};

function InteractModal({
  item,
  onClose,
}: {
  item: Interactable;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isExternal = item.action?.href.startsWith("http") || item.action?.href.startsWith("mailto:");

  return (
    <div className="pixel-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="pixel-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pixel-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pixel-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 id="pixel-modal-title">{item.title}</h2>
        {item.image && (
          <img src={item.image} alt="" className="pixel-modal-photo" />
        )}
        <p className="pixel-modal-body">{item.body}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="pixel-modal-tags">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {item.action && (
          isExternal ? (
            <a
              href={item.action.href}
              className="pixel-modal-action"
              target={item.action.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              {item.action.label} →
            </a>
          ) : (
            <Link to={item.action.href} className="pixel-modal-action" data-cursor="disable" onClick={onClose}>
              {item.action.label} →
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Play;
