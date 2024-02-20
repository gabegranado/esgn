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

export const postHeadlines = async (req, res) => {
  const { testData } = req.body;

  const newHeadline = new Home({ 
    headline: 'test',
    websiteLink: 'test'
   });

  try {
      await newHeadline.save();

      res.status(201).json(newHeadline);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export default router;