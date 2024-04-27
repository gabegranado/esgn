import express from "express";
import mongoose from "mongoose";
import Subscribe from "../models/subscribeModel.js";

const router = express.Router();

export const getSubscribed = async (req, res) => {
    try {
      console.log("TEST", req.params.userID);
        const allSub = await Subscribe.find({ userID: req.params.userID});
        console.log("Found SUBED");
        console.log("All SUBED ", allSub);
        res.status(200).json(allSub);
      } catch (error) {
        console.log("error getSub");
        res.status(409).json({ message: error.message });
      }
};

export const getOneSubscribed = async (req, res) => {
  try {
    console.log("TEST", req.params.gameID);
      const allSub = await Subscribe.findOne({ gameID: req.params.gameID});
      console.log("Found one");
      console.log("one subbed ", allSub);
      res.status(200)
      .json(allSub);
    } catch (error) {
      console.log("error getSub");
      res.status(409).json({ message: error.message });
    }
};

export const subscribe = async (req, res) => {
    const {
        gameID,
        userID,
      } = req.body;
    
      const newSub = new Subscribe({
        gameID,
        userID,
      });

      console.log(typeof(gameID))

      if (req.body.gameID === "") {
        console.log("Invalid sub");
        res.send("Invalid sub");
      } else {
        try {
          await newSub.save();
          console.log("Sub Added");
          res.status(201).json(newSub);
        } catch (error) {
          console.log("error subscribe ", error.message);
          res.status(409).json({ message: error.message });
        }
      }
}

export const unSubscribe = async (req, res) => {
    try {
        const { gameID, userID } = req.body;

        // Delete documents where both gameID and userID match
        const del = await Subscribe.deleteOne({ gameID: gameID, userID: userID });

        if (del.deletedCount > 0) {
            console.log("Subscription deleted successfully");
            return res.status(200).json({ message: "Subscription deleted successfully" });
        } else {
            console.log("Subscription not found");
            return res.status(404).json({ message: "Subscription not found" });
        }
    } catch (error) {
        console.error("Error deleting subscription:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export default router;