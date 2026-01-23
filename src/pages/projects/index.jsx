import React from "react";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/blog/Navbar";
import { colorPalette } from "../../constants/colorPalette";
import projectData from "../../constants/projectData";
import ProjectContent from "../../components/blog/ProjectContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.scss";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { id } = useParams();

  const project = projectData[id];

  if (!project) {
    return (
      <div
        css={css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        `}
      >
        Project not found
      </div>
    );
  }

  const { category, timeRead } = project;

  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: ${colorPalette.text};
      `}
    >
      <NavBar category={category} timeRead={timeRead} />
      <ProjectContent projectId={id} />
     
    </div>
  );
};

export default Projects;
