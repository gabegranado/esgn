import express from "express";

import {
  createUser,
  loginUser,
  getUser,
} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get(
  "/:identifier",
  // passport.authenticate("jwt", { session: false }),
  getUser
);

export default router;
