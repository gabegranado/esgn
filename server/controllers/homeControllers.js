import express from "express";
import mongoose from "mongoose";

import Home from "../models/homeModel.js";

const router = express.Router();

export const getHeadlines = async (req, res) => {
    try {
        //What does Home.find do??
        const allHeadlines = await Home.find();
        console.log("found healines");
        console.log("all headlines ", allHeadlines);
        res.status(200).json(allHeadlines);
      } catch (error) {
        console.log("error getHeadlines");
        res.status(409).json({ message: error.message });
      }
};


export default router;