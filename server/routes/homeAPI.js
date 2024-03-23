import express from "express";

import {
    getArticles, addArticles
  } from "../controllers/homeControllers.js";
  const router = express.Router();

  router.get("/", getArticles);
  router.post("/", addArticles);
  
  export default router;