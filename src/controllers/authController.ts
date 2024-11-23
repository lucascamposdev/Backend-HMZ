import { RequestHandler } from "express";
import { loginService } from "../services/authService";

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await loginService(email, password);
    res.status(200).json({ token });

  } catch (err: any) {
    next(err)
  }
};
