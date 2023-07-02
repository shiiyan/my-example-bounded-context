import express, { Express } from "express";
import { AbstractController } from "@common/port/http/abstractController";

export class Application {
  private app: Express;
  private controllers: AbstractController[];
  private port: number;

  constructor(controllers: AbstractController[], port: number) {
    this.app = express();
    this.controllers = controllers;
    this.port = port;
    this.initializeControllers();
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log("dev server running at: http://localhost:8000");
    });
  }

  private initializeControllers(): void {
    this.controllers.forEach((controller: AbstractController) =>
      this.app.use("/", controller.getRouter())
    );
  }
}
