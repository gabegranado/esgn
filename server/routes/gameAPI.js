import express from "express";

import {
    getGame, setGame
  } from "../controllers/gameControllers.js";
  const router = express.Router();

  router.get("/:gameID", getGame);
  router.post("/", setGame);
  
  export default router;