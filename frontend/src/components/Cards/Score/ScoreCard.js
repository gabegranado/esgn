import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Paper from "@material-ui/core/Paper";

// ScoreCard component for individual score cards
export default function ScoreCard({ scoreData }) {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Paper>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Grid container>
                {/* Left side */}
                <div
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "10px",
                    marginRight: "2px",
                    marginLeft: "2px",
                    marginTop: "10px",
                  }}
                >
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: "100px", height: "100px" }} // Resize to fit container width, maintain aspect ratio
                      image={scoreData.leftImage}
                      alt="GAMERS"
                    />
                  </Grid>
                </div>

                {/* Versus */}
                <div
                  style={{
                    marginTop: "60px",
                    marginRight: "2px",
                    marginLeft: "2px",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    VS
                  </Typography>
                </div>

                {/* Right side */}
                <div
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "50px",
                    marginRight: "2px",
                    marginLeft: "2px",
                    marginTop: "10px",
                  }}
                >
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: 100, height: 100 }}
                      image={scoreData.rightImage}
                      alt="GAMERS"
                    />
                  </Grid>
                </div>
              </Grid>
            </CardMedia>

            {/* Score */}
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {scoreData.score}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}
