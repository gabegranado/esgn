import express from "express";
import mongoose from "mongoose";

import Team from '../models/teamModel.js';

const router = express.Router();

export const findTeamById = async (req, res) => {
    try {
        const team = await Team.findOne({ _id: req.params.teamId});
        console.log("Found Team", team);
        res.status(200).json(team);
    } catch (error) {
        console.log("error findTeamById")
        res.status(409).json({ message: error.message });
    }
}

export default router;