import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sprintf from 'sprintf';
import mongoose from 'mongoose';

import { MongoClient, ServerApiVersion } from 'mongodb'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import homeRoutes from './routes/homeAPI.js';
import streamsRoutes from './routes/streamsAPI.js';
import teamRoutes from './routes/teamAPI.js';
import userRoutes from './routes/userAPI.js';
import gameRoutes from './routes/gameAPI.js';
import scoreRoutes from './routes/scoreAPI.js';

dotenv.config();
const PORT = 4000;
const app = express();
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri = sprintf("mongodb+srv://casgrana:%s@cluster0.jlyjhgq.mongodb.net/?retryWrites=true&w=majority", DB_PASSWORD);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/', homeRoutes);
app.use('/streams', streamsRoutes);
app.use('/teams', teamRoutes);
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use('/scores', scoreRoutes);
// app.get('/', (req, res) => {
//     res.json([
//         {
//             "Home": "testing"
//         }
//     ])
// })

// app.get('/streams',(req,res)=>{
//     res.json([
//         {
//             "Streams":"streams"
//         }
//     ])
// })

// app.get('/teams',(req,res)=>{
//     res.json([
//         {
//             "Teams":"teams"
//         }
//     ])
// })

// app.get('/users',(req,res)=>{
//     res.json([
//         {
//             "Users":"users"
//         }
//     ])
// })

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, function(err) {
  if (err) {
      console.log('error, not connected to database' + err);
  } else {
      console.log('connection to database succesful');
  }
})

  
  app.listen(PORT, function() {
      console.log('running the server on port ' + PORT);
});