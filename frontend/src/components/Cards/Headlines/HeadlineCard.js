import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@material-ui/core/Paper";

export default function HeadlineCard({ headlineData }) {
  return (
    <a href="http://localhost:3000/" style={{ textDecoration: "none" }}>
      <Paper>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/GAMERS.jpeg"
              alt="GAMERS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {headlineData.headline}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {headlineData.websiteLink}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </a>
  );
}
