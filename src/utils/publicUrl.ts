/** Public-folder asset path respecting Vite `base` (e.g. `/test/images/logo.png`). */
export function publicUrl(path: string): string {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

/** React Router `basename` from Vite `base` (`/test`, or empty at domain root). */
export function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base || undefined;
}
