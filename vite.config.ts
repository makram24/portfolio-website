import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { chatApiDevPlugin } from "./vite.chatApiPlugin";

function normalizeBase(basePath: string | undefined): string {
  if (!basePath || basePath === "/") return "/";
  let base = basePath.trim();
  if (!base.startsWith("/")) base = `/${base}`;
  if (!base.endsWith("/")) base = `${base}/`;
  return base;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);
  const base = normalizeBase(env.VITE_BASE_PATH);

  return {
    base,
    plugins: [
      react(),
      ...(mode === "development" ? [chatApiDevPlugin()] : []),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ["three", "three-stdlib"],
            "react-three": ["@react-three/fiber", "@react-three/drei"],
            gsap: ["gsap"],
            vendor: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    optimizeDeps: {
      include: ["three", "gsap", "lenis"],
    },
  };
});
