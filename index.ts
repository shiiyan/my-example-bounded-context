import express, { Express, Request, Response } from "express";
import { router } from "./routes/index";

const app: Express = express();

app.use("/", router);

app.listen("8000", () => {
  console.log("dev server running at: http://localhost:8000");
});
