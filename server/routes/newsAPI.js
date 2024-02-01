import express from "express";

import {
    getHeadlines
  } from "../controllers/newsControllers.js";
  const router = express.Router();

  router.get("/", getHeadlines);
  
  export default router;