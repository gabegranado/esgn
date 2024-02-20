import express from "express";

import {
    getHeadlines, postHeadlines
  } from "../controllers/homeControllers.js";
  const router = express.Router();

  router.get("/", getHeadlines);
  router.post("/", postHeadlines);
  
  export default router;