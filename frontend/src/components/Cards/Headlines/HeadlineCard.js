import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import headline1 from "../../../assets/feedpics/headLine1.png";
import headline2 from "../../../assets/feedpics/headline2.png";
import headline3 from "../../../assets/feedpics/headline3.jpg";

// Define headline data outside of the component
const headlineDataJson = {
  1: {
    pic: headline1,
    title: "The best place to watch LoL Esports and earn rewards!",
    link: "https://lolesports.com/article/msi-2024-format-venue-ticket-information/bltf0f6812a20dc5ba5",
    desc: "The League of Legends Mid-Season Invitational is coming to Chengdu, China! From May 1-19, 12 qualified teams from around the world will take to the global stage for the first time this year at the Chengdu Financial City Performing Arts Center."
  },
  2: {
    pic: headline2,
    title: "MSI 2024 Format, Venue, Ticket Information",
    link: "https://esports.rocketleague.com/news/2024-rlcs-major-1-primer-plus-onsite-guide",
    desc: "It’s nearly time for the RLCS 2024 Copenhagen Major at K.B. Hallen Arena in Copenhagen, Denmark! The first in-person tournament of 2024 will feature four intense days of competition."
  },
  3: {
    pic: headline3,
    title: "2024 RLCS COPENHAGEN MAJOR PRIMER + ON-SITE GUIDE",
    link: "https://www.ea.com/games/apex-legends/compete/news/y4-s1po-eyntk",
    desc: "The first Apex Legends Global Series LAN event of Year 4 is on May 2-5. Click to find out more about teams, schedules, groups, and more! "
  }
};

export default function HeadlineCard({ headlineData }) {
  return (
    <a href={headlineDataJson[headlineData].link} style={{ textDecoration: "none" }}>
      <Paper>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={headlineDataJson[headlineData].pic}
              alt="GAMERS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {headlineDataJson[headlineData].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {headlineDataJson[headlineData].desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </a>
  );
}
