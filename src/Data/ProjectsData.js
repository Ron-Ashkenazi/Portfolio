import rmdbImg from "../images/rmdb-logo.png";
import rmdbBg from "../images/rmdb-background.png";
import aotImg from "../images/aot-logo.png";
import aotBg from "../images/aot-background.png";
import barbershopImg from "../images/barbershop-logo.png";
import barbershopBg from "../images/barbershop-background.png";
import plImg from "../images/pl-logo.png";
import plBg from "../images/pl-background.png";

export const projectsData = [
  {
    title: "RMDB",
    info: "A movie and TV show platform inspired by IMDB, allowing users to browse content, rate their favorite media, and create watchlists for easy tracking of what to watch next.",
    img: rmdbImg,
    bgImg: rmdbBg,
    technologies: [
      "JavaScript",
      "React",
      "NodeJS",
      "Express",
      "CSS",
      "MongoDB",
    ],
    visitColor: "#D5B263",
    visit: "https://rmdb-site.netlify.app/",
    github: "https://github.com/Ron-Ashkenazi/tv-site-frontend",
    youtube: "https://youtu.be/UA4iBwfR_48",
  },
  {
    title: "AOT-Moments",
    info: 'A fan site dedicated to "Attack on Titan" where users can explore and rank their favorite moments from the series, offering an interactive and engaging experience for fans.',
    img: aotImg,
    bgImg: aotBg,
    technologies: [
      "JavaScript",
      "React",
      "NodeJS",
      "Express",
      "CSS",
      "MongoDB",
    ],
    visitColor: "#294023",
    visit: "https://aot-moments.netlify.app/",
    github:
      "https://github.com/Ron-Ashkenazi/Attack-On-Titan-best-moments-site-frontend",
    youtube: "https://youtu.be/LKaYkNTiRpI",
  },
  {
    title: "Barbershop App",
    info: "An appointment scheduling app for barbershops, providing users with an easy way to book appointments while admins can manage schedules and time off efficiently.",
    img: barbershopImg,
    bgImg: barbershopBg,
    technologies: ["Java", "Firebase"],
    visit: null,
    github: "https://github.com/Ron-Ashkenazi/Barbershop",
    youtube: null,
  },
  {
    title: "Premier League Top 4 Predictions",
    info: "A predictive tool that forecasts the top 4 Premier League teams based on historical data, making it perfect for football enthusiasts who enjoy analyzing the sport.",
    img: plImg,
    bgImg: plBg,
    technologies: ["Pyhton", "NumPy", "Selenium", "Sklearn", "Pandas"],
    visit: null,
    github: "https://github.com/Ron-Ashkenazi/Data-Science-Project",
    youtube: null,
  },
];
