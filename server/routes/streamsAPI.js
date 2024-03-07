import express from "express";

import {
    getStreams, addStreams, deleteStream
  } from "../controllers/streamsControllers.js";
  const router = express.Router();

  router.get('/', getStreams);
  router.post('/', addStreams);
  router.delete("/:streamID", deleteStream);
  
  export default router;