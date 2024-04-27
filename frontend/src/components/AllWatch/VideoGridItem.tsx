import { useEffect, useRef, useState } from "react";
import { formatDuration } from "./utils/formatDuration.ts";
import { formatTimeAgo } from "./utils/formatTimeAgo.ts";
import React from "react";
import { Grid } from "@mui/material";
import heartFull from '../../assets/icons/fullHeart.png';
import heartEmpty from '../../assets/icons/download.png';
import { width } from "@mui/system";
import axios from "axios";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFollowState, setFollowState] = useState(0);

  const nameToId  = {
    "TOP Esports vs Loud": "6628204241860dd5ce32557c",
    "FlyQuest vs PSG Talon": "66281f7841860dd5ce325576",
    "SKT T1 vs Estral Esports": "6628200d41860dd5ce325578",
    "Fnatic vs GAM Esports": "6628202c41860dd5ce32557a",
    "Dhill Ducks vs Who is Goldfish": "6628205d41860dd5ce32557e",
    "Faze Clan vs Natus Vincere": "6628208841860dd5ce325582",
    "Vitality vs Cloud9": "6628209941860dd5ce325584"
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:4000/handleSub/getOne/${nameToId[title]}`;
  
      try {
        const response = await axios.get(url);
  
        if (response.data !== null) {
          setFollowState(1);
        } else {
          setFollowState(0);
        }
      } catch (err) {
        console.log("ERROR:", err);
      }
    };
  
    fetchData();
  }, []);
  
  

  const subOrunSub = async () => {

    if (showFollowState == 0) {
      setFollowState(1);

      try {
        const response = await axios.post(
          "http://localhost:4000/handleSub",
          {
            gameID: nameToId[title],
            userID: "66244ebbbba78766afb8efff"
          }
        );
      } catch (err) { 
        console.log("ERRROR")
      }

    } else {
      setFollowState(0);
      try {
        const response = await axios.delete("http://localhost:4000/handleSub", {
          data: {
            gameID: nameToId[title],
            userID: "66244ebbbba78766afb8efff"
          }
        });
      } catch (err) { 
        console.log("ERROR:", err);
      }
      
    }
    window.location.reload();

    };
  
  const shownIMG = () => {


    if (showFollowState == 0) {
     return ( <img src={heartEmpty} style={{ marginLeft:'20px', width: '20px', height: '20px' }} />)
    }  else {
      return ( <img src={heartFull} style={{ marginLeft:'20px', width: '20px', height: '20px' }} />)
    }

  }

  // useEffect(() => {
  //   if (videoRef.current == null) return;

  //   if (isVideoPlaying) {
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      // onMouseEnter={() => setIsVideoPlaying(true)}
      // onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        {/* <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div> */}
        <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>

          <div className="text-secondary-text text-sm">
          <Grid container >
            <Grid item>
            {formatTimeAgo(postedAt)}
            </Grid>
            <Grid item >
              <button onClick={subOrunSub}>
              {shownIMG()}
              </button>

            </Grid>
            </Grid>
          </div>

          
          
        </div>
      </div>
    </div>
  );
}
