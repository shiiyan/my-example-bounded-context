import express, { Express } from "express";
import { AbstractController } from "./controllers/abastractController";

export class Application {
  private app: Express;
  private controllers: AbstractController[];

  constructor(controllers: AbstractController[]) {
    this.app = express();
    this.controllers = controllers;
    this.initializeController();
  }

  public listen(): void {
    this.app.listen("8000", () => {
      console.log("dev server running at: http://localhost:8000");
    });
  }

  private initializeController(): void {
    this.controllers.forEach((controller) =>
      this.app.use("/", controller.getRouter())
    );
  }
}
