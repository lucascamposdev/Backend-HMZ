import jwt from "jsonwebtoken";
import prisma from "../prisma/client"; 
import { HttpError } from "../utils/HttpError";

export const loginService = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new HttpError(401, "Invalid email or password")
    }

    if (password !== user.password) {
        throw new HttpError(401, "Invalid email or password")
    }

    return jwt.sign({ id: user.id, role: user.role },process.env.JWT_SECRET!,{ expiresIn: "1h" });
}
