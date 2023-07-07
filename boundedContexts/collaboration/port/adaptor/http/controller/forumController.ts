import { Request, Response } from "express";
import { AbstractController } from "@common/port/http/abstractController";

export class ForumController extends AbstractController {
  protected initialize(): void {
    this.router.get("/forums", this.getForums);
  }

  private async getForums(request: Request, response: Response): Promise<void> {
    response.status(200).json({ forums: ["Hello forums!"] });
  }
}
