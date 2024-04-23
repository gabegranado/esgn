import express from "express";

import {
  getSubscribed, subscribe, unSubscribe
  } from "../controllers/subscribeControllers.js";
  const router = express.Router();

  router.get('/:userID', getSubscribed);
  router.post('/', subscribe);
  router.delete("/", unSubscribe);
  
  export default router;