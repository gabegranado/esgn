import express from "express";
import mongoose from "mongoose";

import News from "../model/newsModel.js";

const router = express.Router();

export const getHeadlines = async (req, res) => {
    try {
        const allHeadlines = await News.find();
        //Gets all News, not necescarily headlines
        console.log("found healines");
        console.log("all headlines ", allHeadlines);
        res.status(200).json(allHeadlines);
      } catch (error) {
        console.log("error getMovies");
        res.status(409).json({ message: error.message });
      }
};


export default router;