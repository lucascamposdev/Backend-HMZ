import { Request, Response, NextFunction, RequestHandler } from "express";

export const isAdmin: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'ADMIN') {
    res.status(403).json({ message: "Permission denied" });
    return;
  }

  next();
};
