import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/HttpError";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
