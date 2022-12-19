import Router from "express";
import * as userController from "../controllers/userController";

const router = Router();
router.get("/ping", userController.pong);

export default router;