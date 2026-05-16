import { config } from "../../config";
import { publicUrl } from "../../utils/publicUrl";

export const TILE_SIZE = 32;
export const MAP_COLS = 20;
export const MAP_ROWS = 14;

export const TILE = {
  WALL: 1,
  WOOD: 2,
  RUG: 3,
  BOOKSHELF: 4,
  DESK: 5,
  COMPUTER: 6,
  PLANT: 7,
  WINDOW: 8,
  CHAIR: 9,
  SOFA: 10,
  COFFEE: 11,
  LAMP: 12,
  MAT: 13,
} as const;

const SOLID = new Set<number>([
  TILE.WALL,
  TILE.BOOKSHELF,
  TILE.DESK,
  TILE.COMPUTER,
  TILE.PLANT,
  TILE.WINDOW,
  TILE.CHAIR,
  TILE.SOFA,
  TILE.COFFEE,
]);

const RAW_MAP = [
  "####################",
  "#8.....55555533...8#",
  "#8.....5...5..33...#",
  "#8.....55555533....#",
  "#......9.....33....#",
  "#..44..............#",
  "#..44......6666....#",
  "#.......11.........#",
  "#..bb..............#",
  "#..77..............#",
  "#.......pp.........#",
  "#..DD...ll.........#",
  "#..................#",
  "####################",
];

export const TILE_MAP: number[][] = RAW_MAP.map((row) =>
  row.split("").map((ch) => {
    switch (ch) {
      case "#":
        return TILE.WALL;
      case ".":
        return TILE.WOOD;
      case "3":
        return TILE.RUG;
      case "4":
        return TILE.BOOKSHELF;
      case "5":
        return TILE.DESK;
      case "6":
        return TILE.COMPUTER;
      case "7":
        return TILE.PLANT;
      case "8":
        return TILE.WINDOW;
      case "9":
        return TILE.CHAIR;
      case "b":
        return TILE.SOFA;
      case "1":
        return TILE.COFFEE;
      case "l":
        return TILE.LAMP;
      case "p":
        return TILE.WOOD;
      case "D":
        return TILE.MAT;
      default:
        return TILE.WOOD;
    }
  })
);

export const PLAYER_START = { x: 10 * TILE_SIZE, y: 9 * TILE_SIZE };
export const PLAYER_SIZE = { w: 14, h: 18 };
export const INTERACT_RADIUS = 48;

export function isSolidTile(tile: number): boolean {
  return SOLID.has(tile);
}

export function getTileAt(col: number, row: number): number {
  if (row < 0 || row >= MAP_ROWS || col < 0 || col >= MAP_COLS) {
    return TILE.WALL;
  }
  return TILE_MAP[row][col];
}

export interface Interactable {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  prompt: string;
  title: string;
  body: string;
  tags?: string[];
  image?: string;
  action?: { label: string; href: string; external?: boolean };
}

const eng = config.engineeringProjects[0] ?? {
  title: "Engineering project",
  category: "Engineering",
  description: "MSc and portfolio engineering work.",
  stack: ["React", "IoT"],
};

export const INTERACTABLES: Interactable[] = [
  {
    id: "computer",
    x: 11 * TILE_SIZE,
    y: 6 * TILE_SIZE,
    width: TILE_SIZE * 4,
    height: TILE_SIZE,
    prompt: "Projects",
    title: "Dev setup",
    body: config.skills.develop.details,
    tags: config.skills.develop.tools.slice(0, 6),
    action: { label: "View all works", href: "/myworks" },
  },
  {
    id: "bookshelf",
    x: 2 * TILE_SIZE,
    y: 5 * TILE_SIZE,
    width: TILE_SIZE * 2,
    height: TILE_SIZE * 2,
    prompt: "Education",
    title: "Bookshelf",
    body: config.education.map((e) => `${e.degree} — ${e.school} (${e.period})`).join("\n\n"),
    tags: ["BME", "LIU", "MSc"],
  },
  {
    id: "desk",
    x: 6 * TILE_SIZE,
    y: 2 * TILE_SIZE,
    width: TILE_SIZE * 5,
    height: TILE_SIZE * 3,
    prompt: "Certs",
    title: "Work desk",
    body: config.certifications.map((c) => `${c.name} (${c.issuer})`).join("\n"),
    tags: ["CCNA", "Security", "IEEE"],
  },
  {
    id: "plant",
    x: 2 * TILE_SIZE,
    y: 9 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    prompt: "About",
    title: "Desk plant",
    body: config.about.description,
    tags: config.highlights.map((h) => `${h.value} ${h.label}`),
  },
  {
    id: "window",
    x: 16 * TILE_SIZE,
    y: 1 * TILE_SIZE,
    width: TILE_SIZE * 2,
    height: TILE_SIZE * 3,
    prompt: "Hire me",
    title: "Budapest view",
    body: `${config.openTo.headline}\n\n${config.openTo.items.map((i) => `${i.label}: ${i.value}`).join("\n")}\n\n${config.openTo.responseTime}`,
    tags: [config.social.location, "Remote · EU"],
    action: {
      label: "Email Makram",
      href: `mailto:${config.contact.email}`,
    },
  },
  {
    id: "iot",
    x: 8 * TILE_SIZE,
    y: 4 * TILE_SIZE,
    width: TILE_SIZE * 4,
    height: TILE_SIZE * 2,
    prompt: "IoT",
    title: "Lab rug",
    body: config.skills.iot.details,
    tags: config.skills.iot.tools,
  },
  {
    id: "experience",
    x: 6 * TILE_SIZE,
    y: 1 * TILE_SIZE,
    width: TILE_SIZE * 3,
    height: TILE_SIZE,
    prompt: "Work",
    title: "Career notes",
    body: config.experiences
      .map((e) => `${e.position} @ ${e.company} (${e.period})`)
      .join("\n\n"),
    action: { label: "Back to portfolio", href: "/" },
  },
  {
    id: "sofa",
    x: 2 * TILE_SIZE,
    y: 7 * TILE_SIZE,
    width: TILE_SIZE * 2,
    height: TILE_SIZE,
    prompt: "Skills",
    title: "Reading nook",
    body: config.skills.security.details,
    tags: config.skills.security.tools.slice(0, 5),
  },
  {
    id: "coffee",
    x: 7 * TILE_SIZE,
    y: 6 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    prompt: "Coffee",
    title: "Coffee station",
    body: "Fuel for late-night deploys and MSc deadlines. Usually a flat white — sometimes just more React rerenders.",
    tags: ["☕", "Budapest", "Night owl"],
  },
  {
    id: "whiteboard",
    x: 10 * TILE_SIZE,
    y: 10 * TILE_SIZE,
    width: TILE_SIZE * 2,
    height: TILE_SIZE,
    prompt: "MSc project",
    title: "Whiteboard",
    body: `${eng.title} (${eng.category})\n\n${eng.description}`,
    tags: eng.stack,
  },
  {
    id: "poster",
    x: 7 * TILE_SIZE,
    y: 10 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    prompt: "Me",
    title: "Makram Al Moghrabi",
    body: `${config.developer.title}\n${config.developer.subtitle}\n\n${config.developer.description}`,
    image: publicUrl("/images/mypicnbg.png"),
    action: { label: "GitHub", href: config.contact.github, external: true },
  },
  {
    id: "chair",
    x: 7 * TILE_SIZE,
    y: 4 * TILE_SIZE,
    width: TILE_SIZE,
    height: TILE_SIZE,
    prompt: "Agencies",
    title: "Office chair",
    body: config.about.clientNote,
    tags: ["Carrot Media", "Social Bang", "Brainy Media"],
  },
];
