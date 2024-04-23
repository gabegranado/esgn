const fqpsg = require("../../../assets/feedpics/FQvsPSG.jpg");
const t1vestral = require("../../../assets/feedpics/T1vsEstral.jpg");
const fnvgam = require("../../../assets/feedpics/FNvsGAM.jpg");
const topvloud = require("../../../assets/feedpics/TOPvsLOUD.jpg");
const LOL = require("../../../assets/feedpics/LOL.jpg");
const owfvn = require("../../../assets/feedpics/owfazevnavi.jpg");
const owvvc9 = require("../../../assets/feedpics/owvitvc9.jpg");
const dhillvgold = require("../../../assets/feedpics/dhillvgold.jpg");
const owlogo = require("../../../assets/feedpics/owlogo.jpg");
const RLVITvBDS = require("../../../assets/feedpics/RLVITvBDS.jpg");
const CS2Logo = require("../../../assets/feedpics/CS2.jpg");
const RLLogo = require("../../../assets/feedpics/RL.jpg");

export const categories = [
  "All",
  "League of Legends",
  "Overwatch",
  "Rocket League",
  "Dota 2",
  "Valorant",
  "Counter Strike",
  "Smash Bros",
];
export const videos = [
  {
    id: "1",
    title: "Rocketleague Playoffs Game Team Vitality vs Team BDS",
    channel: {
      name: "Rocket League",
      id: "Rocket League",
      profileUrl: RLLogo,
    },
    views: 42345,
    postedAt: new Date("2024-04-23"),
    duration: 1000,
    thumbnailUrl: RLVITvBDS,
    videoUrl: "",
  },
  {
    id: "2",
    title: "FlyQuest vs PSG Talon",
    channel: {
      name: "League of Legends",
      id: "League of Legends",
      profileUrl: LOL,
    },
    views: 222536,
    postedAt: new Date("2024-05-01"),
    duration: 938,
    // thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    thumbnailUrl: fqpsg,
    videoUrl: "",
  },
  {
    id: "3",
    title: "SKT T1 vs Estral Esports",
    channel: {
      name: "League of Legends",
      id: "League of Legends",
      profileUrl: LOL,
    },
    views: 257136,
    postedAt: new Date("2024-05-01"),
    duration: 732,
    thumbnailUrl: t1vestral,
    videoUrl: "",
  },
  {
    id: "4",
    title: "Fnatic vs GAM Esports",
    channel: {
      name: "League of Legends",
      id: "League of Legends",
      profileUrl: LOL,
    },
    views: 1232300,
    postedAt: new Date("2024-05-02"),
    duration: 120,
    thumbnailUrl: fnvgam,
    videoUrl: "",
  },
  {
    id: "5",
    title: "TOP Esports vs Loud",
    channel: {
      name: "League of Legends",
      id: "League of Legends",
      profileUrl: LOL,
    },
    views: 112,
    postedAt: new Date("2024-05-02"),
    duration: 4343,
    thumbnailUrl: topvloud,
    videoUrl: "",
  },
  {
    id: "8",
    title: "Dhill Ducks vs Who is Goldfish",
    channel: {
      name: "Overwatch",
      id: "Overwatch",
      profileUrl: owlogo,
    },
    views: 20323340,
    postedAt: new Date("2024-04-20"),
    duration: 105,
    thumbnailUrl: dhillvgold,
    videoUrl: "",
  },
  {
    id: "6",
    title: "Faze Clan vs Natus Vincere",
    channel: {
      name: "CounterStrike2",
      id: "CounterStrike2",
      profileUrl: CS2Logo,
    },
    views: 10340,
    postedAt: new Date("2024-03-31"),
    duration: 54,
    thumbnailUrl: owfvn,
    videoUrl: "",
  },
  {
    id: "7",
    title: "Vitality vs Cloud9",
    channel: {
      name: "CounterStrike2",
      id: "CounterStrike2",
      profileUrl: CS2Logo,
    },
    views: 10323340,
    postedAt: new Date("2024-02-20"),
    duration: 100,
    thumbnailUrl: owvvc9,
    videoUrl: "",
  },
];
