import express from "express";

import {
    findTeamById
  } from "../controllers/teamControllers.js";
  const router = express.Router();

  router.get("/findTeamById/:teamId", findTeamById);
  
  export default router;