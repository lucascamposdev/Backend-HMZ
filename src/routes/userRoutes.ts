import express from "express";
import { getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";
import { isAdmin } from "../middleware/isAdmin";

const router = express.Router();

router.get("/", authenticate, getUsers);
router.get("/:id", authenticate, getUserById);
router.put("/:id", authenticate, isAdmin, updateUser);
router.delete("/:id", authenticate, isAdmin, deleteUser);

export default router;
