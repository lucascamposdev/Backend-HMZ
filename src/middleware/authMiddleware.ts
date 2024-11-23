import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { User } from "../types/User";

export const authenticate: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    res.status(401).json({ message: "Access denied" });
    return;
  }

  try {
    const authenticatedUser = jwt.verify(token, process.env.JWT_SECRET!) as User;
    req.user = authenticatedUser;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
