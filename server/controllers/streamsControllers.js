import express from "express";
import mongoose from "mongoose";

import Streams from "../models/streamsModel.js";

const router = express.Router();

export const getStreams = async (req, res) => {
    try {
        const allStreams = await Streams.find();
        console.log("Found Streams");
        console.log("All Streams ", allStreams);
        res.status(200).json(allStreams);
      } catch (error) {
        console.log("error getStreams");
        res.status(409).json({ message: error.message });
      }
};

export const addStreams = async (req, res) => {
    const {
        title,
        streamLink,
        gameCategory,
      } = req.body;
    
      const newStream = new Streams({
        title,
        streamLink,
        gameCategory,
      });

      if (req.body.title== "") {
        console.log("Invalid stream title");
        res.send("Invalid stream title");
      } else {
        try {
          await newStream.save();
          console.log("Stream Added");
          res.status(201).json(newStream);
        } catch (error) {
          console.log("error addStream ", error.message);
          res.status(409).json({ message: error.message });
        }
      }
}

export const deleteStream = async (req, res) => {
    try {
      const del = await Streams.deleteOne({ _id: req.params.streamID });
      console.log("stream Deleted");
      res.status(200);
    } catch (error) {
      console.log("error deleteStream");
      res.status(400);
      //Still says "Sending Request" on Postman, have to manually stop. Does delete tho, sometimes?
    }
  };

export default router;