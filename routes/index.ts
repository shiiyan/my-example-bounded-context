import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});
