import express, { Router, Request, Response } from "express";

export class ForumController {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public getRouter(): Router {
    return this.router;
  }

  public initialize(): void {
    this.router.get("/forums", this.getForums);
  }

  private async getForums(request: Request, response: Response): Promise<void> {
    response.send("Hello forums");
  }
}
