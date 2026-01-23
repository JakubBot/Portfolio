import React from "react";
import { css } from "@emotion/react";
import AnimatedHeader from "../Animated/Header";
import Video from "../Animated/Video";
import Backgammon from "../Description/Backgammon";
import Divider from "../../common/Divider";
import { RenderTags } from "../../common/Tag";
import { typographyValues } from "../../../constants/typography";
import projectData from "../../../constants/projectData";

const ProjectContent = ({ projectId }) => {
  const project = projectData[projectId];

  const {
    header,
    videoHorizontal,
    videoVertical,
    tags,
  } = project ?? {};

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
          padding: 20px;
          max-width: 1000px;
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
            mobileSize={typographyValues.textXxl.fontSize}
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
      </div>
    </>
  );
};

export default ProjectContent;
