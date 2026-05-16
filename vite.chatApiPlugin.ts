import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function createMockResponse(res: ServerResponse) {
  let statusCode = 200;
  return {
    status(code: number) {
      statusCode = code;
      return this;
    },
    json(payload: unknown) {
      res.statusCode = statusCode;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(payload));
    },
  };
}

/** Serves /api/chat during `vite dev` using the same handler as Vercel. */
export function chatApiDevPlugin(): Plugin {
  return {
    name: "chat-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split("?")[0];
        if (path !== "/api/chat") {
          next();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const body = await readBody(req);
          const parsed = JSON.parse(body);
          const { default: handler } = await import("./api/chat.js");
          await handler(
            { method: "POST", body: parsed },
            createMockResponse(res)
          );
        } catch (error) {
          console.error("[chat-api-dev]", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Internal Server Error" }));
        }
      });
    },
  };
}
