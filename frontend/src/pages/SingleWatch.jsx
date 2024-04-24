import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../actions/headlines.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HeadlineCard from "../components/Cards/Headlines/HeadlineCard.js";
import ScoreCard from "../components/Cards/Score/ScoreCard.js";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import * as Realm from "realm-web";
import axios from "axios";

export default function SingleWatch() {
  const app = new Realm.App({ id: "application-0-eruvmsm" });
  const [user, setUser] = useState();
  const [events, setEvents] = useState([]);
  var prev = "2000";
  var team1Score;
  var team2Score;
  const [teamScores, setTeamScores] = useState([0, 0]);

  useEffect(() => {
    const login = async () => {
      const response = await axios.get(
        "http://localhost:4000/scores/662462622836214d5ddbbd2f"
      );
      // Authenticate anonymously
      console.log(
        "team a score",
        response.data.team1Score,
        response.data.team2Score
      );
      team1Score = response.data.team1Score;
      team2Score = response.data.team2Score;
      setTeamScores([response.data.team1Score, response.data.team2Score]);

      const user = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);

      // Connect to the database
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("test").collection("scores");

      // Everytime a change happens in the stream, add it to the list of events
      for await (const change of collection.watch()) {
        setEvents((events) => [...events, change]);
      }
    };
    login();
  }, []);

  const noDups = (e) => {
    if (e.fullDocument.ppm != prev) {
      return <td>{JSON.stringify(e.fullDocument.ppm)}</td>;
    }
    prev = e.fullDocument.ppm;
  };
  const latestEvent = events[events.length - 1];

  const hasUpdate = () => {
    if (latestEvent) {
      return (
        <Typography variant="body1">
          Team BDS: {latestEvent.fullDocument.team1Score} <br />
          Team Vitality: {latestEvent.fullDocument.team2Score}
        </Typography>
      );
    } else {
      return (
        <Typography variant="body1">
          Team BDS: {teamScores[0]} <br />
          Team Vitality: {teamScores[1]}
        </Typography>
      );
    }
  };

  // Return the JSX that will generate HTML for the page
  // Return the JSX that will generate HTML for the page
  return (
    <div>
      <div className="flex justify-center">
      <iframe 
      src="https://player.twitch.tv/?channel=dreamwetmoist&parent=localhost" 
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      height="678"
      width="920">
      </iframe>
      </div>
      <div className="flex justify-center">
        <Paper style={{ padding: "20px" }}>
          <Typography variant="h6" color="primary">
            Latest Score
          </Typography>
          {hasUpdate()}
        </Paper>
      </div>
    </div>
  );
}
