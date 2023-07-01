import express, { Express } from "express";
import { ForumController } from "./controllers/forumController";

const app: Express = express();

const forumController = new ForumController();
forumController.initialize();

app.use("/", forumController.getRouter());

app.listen("8000", () => {
  console.log("dev server running at: http://localhost:8000");
});
