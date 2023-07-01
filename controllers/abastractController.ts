import express, { Router } from "express";

export abstract class AbstractController {
  protected router: Router;

  constructor() {
    this.router = express.Router();
    this.initialize();
  }

  public getRouter(): Router {
    return this.router;
  }

  protected abstract initialize(): void;
}
