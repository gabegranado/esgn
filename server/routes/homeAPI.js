import express from "express";

import {
    getHeadlines
  } from "../controllers/homeControllers.js";
  const router = express.Router();

  router.get("/", getHeadlines);
  
  export default router;