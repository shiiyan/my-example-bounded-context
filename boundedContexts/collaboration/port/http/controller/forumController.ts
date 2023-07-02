import { Request, Response } from "express";
import { AbstractController } from "@common/port/abstractController";

export class ForumController extends AbstractController {
  protected initialize(): void {
    this.router.get("/forums", this.getForums);
  }

  private async getForums(request: Request, response: Response): Promise<void> {
    response.send("Hello forums!");
  }
}
