import express from "express";
import mongoose from "mongoose";

import Game from "../models/gameModel.js";

const router = express.Router();

export const getGame = async (req, res) => {
    try {
        const game = await Game.findOne({ _id: req.params.gameID});
        console.log("found game", game);
        res.status(200).json(game);
    } catch (error) {
        console.log("error getGame")
        res.status(409).json({ message: error.message });
    }
}

export const setGame = async (req, res) => {
  const {
    game,
    team1Name,
    team2Name
    } = req.body;
    console.log(req.body)
    const newGame = new Game({
        game,
        team1Name,
        team2Name
    });
 
    if (req.body.title== "") {
      console.log("No game info provided");
      res.send("No game info provided");
    } else {
      try {
        await newGame.save();
        console.log("game Added");
        res.status(201).json(newGame);
      } catch (error) {
        console.log("error addGame ", error.message);
        res.status(409).json({ message: error.message });
      }
    }
}

export default router;