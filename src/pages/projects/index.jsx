import { css } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/blog/Navbar";
import AnimatedHeader from "../../components/blog/Animated/Header";
import Video from "../../components/blog/Animated/Video";
import Backgammon from "../../components/blog/Description/Backgammon";

import Divider from "../../components/common/Divider";
import { breakPointsMediaQueries } from "../../constants/breakPoints";
import { colorPalette } from "../../constants/colorPalette";
import { typographyValues } from "../../constants/typography";
import { RenderTags } from "../../components/common/Tag";
import projectData from "../../constants/projectData";

import "./index.scss";
import ProjectContent from "../../components/blog/ProjectContent";

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
      {/* <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 20px;
          max-width: 1200px;
          width: 100%;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: hidden;
          `}
        >
          <AnimatedHeader
            text={header}
            fontSize={typographyValues.textTitle.fontSize}
            delay={0.5}
            stagger={0.03}
          />
        </div>

        <RenderTags tags={tags} />

        <Video
          videoHorizontal={videoHorizontal}
          videoVertical={videoVertical}
        />

        <Divider />
        <Backgammon />

        <h4>tutaj Next i prev, i gh links</h4>
      </div> */}
    </div>
  );
};

export default Projects;
