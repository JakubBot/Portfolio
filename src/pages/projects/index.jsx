import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/blog/Navbar";
import AnimatedHeader from "../../components/blog/Animated/Header";
import Video from "../../components/blog/Animated/Video";

import "./index.scss";
import Backgammon from "../../components/blog/Description/Backgammon";
import BackgammonVideo from "../../assets/videos/backgammon.mp4";

import Divider from "../../components/common/Divider";

const pageData = {
  aeropage: {
    header: "Aeropage Builder",
    subTitle: "Commercial Project • No Code build • UI/UX Design",
    category: "Commercial",
    timeRead: 4,
  },
  rag: {
    header: "Rag Research Project",
    subTitle:
      "Backend Architecture • Java Systems • Scalable RAG Infrastructure",
    category: "Research",
    timeRead: 6,
  },
  linear_equations: {
    header: "Linear Equations Solver",
    subTitle: "Mathematical Algorithms • Problem Solving • Educational Tool",
    category: "Education",
    timeRead: 5,
  },
  backgammon: {
    header: "Backgammon CLI",
    subTitle: "Rule Engine • Local Multiplayer • Hall of Fame",
    category: "Software Development",
    timeRead: 3,
    githubLink: "",
  },
  chess: {
    header: "Chess Game",
    subTitle: "Strategic Gameplay • AI Integration • Web-Based Interface",
    category: "Entertainment",
    timeRead: 4,
  },
};

const Projects = () => {
  const { id } = useParams();

  console.log("id", id);

  const { header, subTitle, category, timeRead } = pageData[id] || {};

  return (
    <div className="blog__container">
      <NavBar category={category} timeRead={timeRead} />
      <div className="blog__content">
        <div className="blog__header-wrapper">
          <AnimatedHeader
            text={header}
            fontSize={56}
            delay={0.5}
            stagger={0.03}
          />
        </div>

        <div className="blog__subtitle-wrapper">
          <AnimatedHeader
            text={subTitle}
            fontSize={28}
            delay={0.7}
            stagger={0.015}
          />
        </div>

        <Video video={BackgammonVideo} />

        <Divider />
        <Backgammon />

        <h4>tutaj Next i prev, i gh links</h4>
      </div>
    </div>
  );
};

export default Projects;
