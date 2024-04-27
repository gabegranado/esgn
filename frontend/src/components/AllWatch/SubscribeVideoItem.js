import { useEffect, useRef, useState } from "react";
import { formatDuration } from "./utils/formatDuration.ts";
import { formatTimeAgo } from "./utils/formatTimeAgo.ts";
import React from "react";
import FQvsPSG from '../../assets/feedpics/FQvsPSG.jpg'
import T1vsEstral from '../../assets/feedpics/T1vsEstral.jpg'
import FNvsGAM from '../../assets/feedpics/FNvsGAM.jpg'
import TopvsLOUD from '../../assets/feedpics/TOPvsLOUD.jpg'
import dhillvgold from '../../assets/feedpics/dhillvgold.jpg'
import owfazevnavi from '../../assets/feedpics/owfazevnavi.jpg'
import owvitvc9 from '../../assets/feedpics/owvitvc9.jpg'

export function SubscribeVideoItem (gameID) {

  const gameId2Gameimage = {
    "66281f7841860dd5ce325576": FQvsPSG,
    "6628200d41860dd5ce325578": T1vsEstral,
    "6628202c41860dd5ce32557a": FNvsGAM,
    "6628204241860dd5ce32557c": TopvsLOUD,
    "6628205d41860dd5ce32557e": dhillvgold,
    "6628208841860dd5ce325582": owfazevnavi,
    "6628209941860dd5ce325584": owvitvc9
    }

    return (

  <div>
    <a href={`/watch?v=${20}`} className="relative aspect-video">
    <img
    src={gameId2Gameimage[gameID.gameID]}
  />
    </a>

  </div>
  );
}
