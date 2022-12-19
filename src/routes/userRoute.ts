import Router from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/ping", userController.pong);
router.post("/user", userController.createUser);

export default router;