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
import Clips from "../assets/Clips_2.png";
import Articles from "../assets/Articles_2.png";

export default function Test() {
  const dispatch = useDispatch();
  const headlines = useSelector((state) => state.headlines);
  const [shownHeadlines, setShownHeadlines] = useState([]);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    const headlinesSelection = Object.values(headlines).filter(
      (headline) => headline.headline
    );
    setShownHeadlines(headlinesSelection);
  }, [headlines]);

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        paddingTop: "20px",
        paddingRight: "2px",
        paddingLeft: "2px",
      }}
    >
      <Grid container spacing={2}>

        <Grid item xs={12} sm={2} md={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img src="Scores_Homepage.02.png" alt="Top Image" />
            </Grid>
            {/* First Score Card */}
            <Grid item>Championship</Grid>
            <ScoreCard
              scoreData={{
                leftImage: "/teamLogos/team-bds.png",
                rightImage: "/teamLogos/233px-Team_Vitality_allmode.png",
                score: "1 - 4",
              }}
            />
            {/* Second Score Card */}
            <Grid item>Upper Bracket Semi-Finals</Grid>

            <ScoreCard
              scoreData={{
                leftImage: "/teamLogos/team-bds.png",
                rightImage: "/teamLogos/karminecorp.png",
                score: "4 - 3",
              }}
            />
            {/* Third Score Card */}
            <Grid item>Lower Bracket Semi-Finals</Grid>
            <ScoreCard
              scoreData={{
                leftImage: "/teamLogos/karminecorp.png",
                rightImage: "/teamLogos/233px-Team_Vitality_allmode.png",
                score: "3 - 4",
              }}
            />
            {/* Fourth Score Card */}
            <Grid item>Lower Bracket Qaurter-Finals</Grid>
            <ScoreCard
              scoreData={{
                leftImage: "/teamLogos/233px-Team_Vitality_allmode.png",
                rightImage: "/teamLogos/Rule-One.jpg",
                score: "4 - 0",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Grid
            container

            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >

            <Grid item>
              <img src="Clips_2.png" alt="Top Image" />
            </Grid>
            <Grid item>
                <HeadlineCard headlineData={1} />
              </Grid>
              <Grid item>
                <HeadlineCard headlineData={2} />
              </Grid>
              <Grid item>
                <HeadlineCard headlineData={3} />
              </Grid>
            {/* {shownHeadlines.map((headline) => (
              <Grid item key={headline.id}>
                <HeadlineCard headlineData={headline} />
              </Grid>
            ))} */}
          </Grid>
        </Grid>


        <Grid item xs={12} sm={2} md={3}>
          <Grid container justifyContent="center" alignItems="center">

          <Grid item>
              <img src="Clips_2.png" alt="Top Image" />
            </Grid>

          </Grid>
          <iframe
            width="400"
            height="215"
            src="https://www.youtube.com/embed/p7luIxI-fKs?si=H_oLy-nxXGyf2UfH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ marginTop: "20px" }}
          ></iframe>
          <iframe             width="400"
            height="215" src="https://www.youtube.com/embed/NyxbqrG4Okg?si=1X0PvuPs1z7QM5FX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
