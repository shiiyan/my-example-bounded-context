import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", async (_req: Request, res: Response) => {
  return res.status(200).send("Hello World!");
});

app.listen("8000", () => {
  console.log("dev server running at: http://localhost:8000");
});
