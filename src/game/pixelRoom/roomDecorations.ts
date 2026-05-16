import { TILE_SIZE } from "./roomData";

export type PropType =
  | "books"
  | "keyboard"
  | "mouse"
  | "mug"
  | "lamp"
  | "clock"
  | "diploma"
  | "trash"
  | "webcam"
  | "plant-pot"
  | "github-sticker"
  | "headphones"
  | "poster-frame";

export interface RoomProp {
  id: string;
  type: PropType;
  x: number;
  y: number;
  flip?: boolean;
}

const t = (col: number, row: number, ox = 0, oy = 0) => ({
  x: col * TILE_SIZE + ox,
  y: row * TILE_SIZE + oy,
});

/** Non-solid visual details layered above floor tiles */
export const ROOM_PROPS: RoomProp[] = [
  { id: "books-1", type: "books", ...t(2, 5, 4, 2) },
  { id: "books-2", type: "books", ...t(2, 5, 18, 10) },
  { id: "books-3", type: "books", ...t(3, 5, 6, 4) },
  { id: "keyboard", type: "keyboard", ...t(7, 3, 6, 20) },
  { id: "mouse", type: "mouse", ...t(9, 3, 8, 24) },
  { id: "mug", type: "mug", ...t(7, 6, 10, 8) },
  { id: "webcam", type: "webcam", ...t(11, 6, 4, 0) },
  { id: "github-sticker", type: "github-sticker", ...t(12, 6, 20, 18) },
  { id: "headphones", type: "headphones", ...t(10, 3, 20, 6) },
  { id: "lamp-1", type: "lamp", ...t(7, 11, 8, 0) },
  { id: "lamp-2", type: "lamp", ...t(8, 11, 8, 0) },
  { id: "clock", type: "clock", ...t(15, 1, 8, 10) },
  { id: "diploma", type: "diploma", ...t(5, 1, 10, 12) },
  { id: "plant-pot", type: "plant-pot", ...t(2, 9, 10, 6) },
  { id: "trash", type: "trash", ...t(17, 10, 6, 10) },
  { id: "poster", type: "poster-frame", ...t(7, 10, 8, 6) },
];
