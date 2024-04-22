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
import  *  as  Realm  from  "realm-web";

export default function SingleWatch() {
    const  app = new  Realm.App({ id:  "application-0-eruvmsm"});
    const [user, setUser] = useState();
    const [events, setEvents] = useState([]);
    var prev = '2000';

    useEffect(() => {
        const  login = async () => {
        // Authenticate anonymously
        const  user = await  app.logIn(Realm.Credentials.anonymous());
        setUser(user);
        
        // Connect to the database
        const  mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const  collection = mongodb.db("test").collection("scores");
        
        // Everytime a change happens in the stream, add it to the list of events
        for  await (const  change  of  collection.watch()) {
        setEvents(events  => [...events, change]);
        }
        }
            login();
        }, []);
    
        const noDups = (e) => {
          if (e.fullDocument.ppm != prev) {
            return(
            <td>{JSON.stringify(e.fullDocument.ppm)}</td>
            )
          }
          prev = e.fullDocument.ppm;
        }
        const latestEvent = events[events.length - 1];

        const hasUpdate = () => {
          if (latestEvent) {
            return (
              <Typography variant="body1">
              Team 1 Score: {latestEvent.fullDocument.team1Score} <br />
              Team 2 Score: {latestEvent.fullDocument.team2Score}
              </Typography>

            )
          } else {
            return (
              <Typography variant="body1">
              Team 1 Score: - <br />
              Team 2 Score: -
              </Typography>            )
          }
        }

// Return the JSX that will generate HTML for the page
// Return the JSX that will generate HTML for the page
return (
    
    <div>
            <iframe
                width="860"
                height="515"
                src="https://www.youtube.com/embed/iUFvGIORfAY?si=Fkab1X6R5K67u8sH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
    <Paper style={{ padding: "20px" }}>
      <Typography variant="h6" color="primary">
        Latest Score
      </Typography>
        {hasUpdate()}
    </Paper>
    </div>
  );
  
}
