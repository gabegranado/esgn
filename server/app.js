import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sprintf from 'sprintf';
import { MongoClient, ServerApiVersion } from 'mongodb'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import homeRoutes from './routes/homeAPI.js';
import streamsRoutes from './routes/streamsAPI.js';
import teamRoutes from './routes/teamAPI.js';
import userRoutes from './routes/userAPI.js';

dotenv.config();
const PORT = 4000;
const app = express();
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri = sprintf("mongodb+srv://casgrana:%s@cluster0.jlyjhgq.mongodb.net/?retryWrites=true&w=majority", DB_PASSWORD);

app.use(cors());

app.use('/', homeRoutes);
app.use('/streams', streamsRoutes);
app.use('/teams', teamRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.json([
        {
            "Home": "testing"
        }
    ])
})

app.get('/streams',(req,res)=>{
    res.json([
        {
            "Streams":"streams"
        }
    ])
})

app.get('/teams',(req,res)=>{
    res.json([
        {
            "Teams":"teams"
        }
    ])
})

app.get('/users',(req,res)=>{
    res.json([
        {
            "Users":"users"
        }
    ])
})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  
  app.listen(PORT, function() {
      console.log('running the server on port ' + PORT);
});