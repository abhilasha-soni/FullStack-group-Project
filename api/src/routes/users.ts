// product route
import { Router } from "express";
import {
  blockUserController,
  createUser,
  getAllUsers,
  logInWithPassword,
  unblockUserController,
  updateUserController,
} from "../controllers/users";
import passport from "passport";

const router = Router();

router.post("/", createUser);

//Login/Register
router.post("/login", logInWithPassword);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);

router.get("/", getAllUsers);

router.put("/:id/block", blockUserController);

router.put("/:id/unblock", unblockUserController);

export default router;
