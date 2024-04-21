import express from "express";
import mongoose from "mongoose";

import Score from "../models/scoreModel.js";

const router = express.Router();

export const getGameScore = async (req, res) => {
    try {
        const score = await Score.findOne({ _id: req.params.gameID});
        console.log("found score", score);
        res.status(200).json(score);
    } catch (error) {
        console.log("error getGameScore")
        res.status(409).json({ message: error.message });
    }
}

export const setGameScore = async (req, res) => {
  const {
    gameID,
    team1Score,
    team2Score
    } = req.body;
    console.log(req.body)
    const newScore = new Score({
        gameID,
        team1Score,
        team2Score
    });

    if (req.body.gameID== "") {
      console.log("No Score info provided");
      res.send("No score info provided");
    } else {
      try {
        await newScore.save();
        console.log("score Added");
        res.status(201).json(newScore);
      } catch (error) {
        console.log("error addScore ", error.message);
        res.status(409).json({ message: error.message });
      }
    }
}

export const incrementTeamScore = async (req, res) => {
    const { scoreID, teamNum } = req.body;
    
    try {
        const score = await Score.findOne({ _id: scoreID });

        if (!score) {
            return res.status(404).json({ message: 'Score not found' });
        }

        if (teamNum === "1") {
            score.team1Score += 1;
        } else if (teamNum === "2") {
            score.team2Score += 1;
        } else {
            return res.status(400).json({ message: 'Invalid team number' });
        }

        await score.save();

        console.log(`Team ${teamNum} score incremented`);
        res.status(200).json(score);
    } catch (error) {
        console.log("Error incrementing team score:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default router;