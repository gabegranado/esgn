import React from "react";
import { Card, CardContent, Typography, Paper } from "@mui/material";

const HighlightCard = ({ url, title }) => {
  return (
    <Card>
      <Paper elevation={3}>
        <CardContent>
          <iframe
            width="100%"
            height="215"
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </CardContent>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          {title}
        </Typography>
      </Paper>
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default HighlightCard;
