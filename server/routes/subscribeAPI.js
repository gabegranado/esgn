import express from "express";

import {
  getSubscribed, subscribe, unSubscribe, getOneSubscribed
  } from "../controllers/subscribeControllers.js";
  const router = express.Router();

  router.get('/:userID', getSubscribed);
  router.get('/getOne/:gameID', getOneSubscribed)
  router.post('/', subscribe);
  router.delete("/", unSubscribe);
  
  export default router;