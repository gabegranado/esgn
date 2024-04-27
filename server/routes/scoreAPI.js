import express from "express";

import {
    getGameScore, setGameScore, incrementTeamScore
  } from "../controllers/scoreControllers.js";
  const router = express.Router();

  router.get("/:gameID", getGameScore);
  router.post("/", setGameScore);
  router.post("/increment", incrementTeamScore)
  
  export default router;