import express from "express";
import mongoose from "mongoose";

import Home from "../models/homeModel.js";

const router = express.Router();

export const getArticles = async (req, res) => {
    try {
        const allArticles = await Home.find();
        console.log("found articles");
        console.log("all articles ", allArticles);
        res.status(200).json(allArticles);
      } catch (error) {
        console.log("error getHeadlines");
        res.status(409).json({ message: error.message });
      }
};

export const addArticles = async (req, res) => {
  const {
      headline,
      websiteLink
    } = req.body;
  
    const newStream = new Home({
      headline,
      websiteLink
    });

    if (req.body.title== "") {
      console.log("Invalid article headline");
      res.send("Invalid article headline");
    } else {
      try {
        await newStream.save();
        console.log("Article Added");
        res.status(201).json(newStream);
      } catch (error) {
        console.log("Article addStream ", error.message);
        res.status(409).json({ message: error.message });
      }
    }
}

export default router;