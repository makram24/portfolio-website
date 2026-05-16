type ChatHandler = (
  req: { method: string; body: unknown },
  res: {
    status(code: number): { json(payload: unknown): void };
  }
) => Promise<void>;

declare const handler: ChatHandler;
export default handler;
