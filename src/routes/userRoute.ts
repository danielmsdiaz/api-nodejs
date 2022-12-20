import Router from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/ping", userController.pong);
router.post("/user", userController.createUser);
router.get("/user", userController.listAllUsers);
router.get("/user/:id", userController.getUserById);
router.delete("/user/:id", userController.deleteUserById);
router.put("/user/:id", userController.UpdateUserById);

export default router;