const fqpsg = require("../../../assets/feedpics/FQvsPSG.jpg");
const t1vestral = require("../../../assets/feedpics/T1vsEstral.jpg");
const fnvgam = require("../../../assets/feedpics/FNvsGAM.jpg");
const topvloud = require("../../../assets/feedpics/TOPvsLOUD.jpg");
const LOL = require("../../../assets/feedpics/LOL.jpg");
const owfvn = require("../../../assets/feedpics/owfazevnavi.jpg");
const owvvc9 = require("../../../assets/feedpics/owvitvc9.jpg");
const dhillvgold = require("../../../assets/feedpics/dhillvgold.jpg");
const owlogo = require("../../../assets/feedpics/owlogo.jpg");

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
    title: "Current Live Game",
    channel: {
      name: "Some Game",
      id: "Some Game",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 42345,
    postedAt: new Date("2024-04-23"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "6",
    title: "Faze Clan vs Natus Vincere",
    channel: {
      name: "Overwatch",
      id: "Overwatch",
      profileUrl: owlogo,
    },
    views: 10340,
    postedAt: new Date("2024-03-31"),
    duration: 54,
    thumbnailUrl: owfvn,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "Vitality vs Cloud9",
    channel: {
      name: "Overwatch",
      id: "Overwatch",
      profileUrl: owlogo,
    },
    views: 10323340,
    postedAt: new Date("2024-02-20"),
    duration: 100,
    thumbnailUrl: owvvc9,
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];
