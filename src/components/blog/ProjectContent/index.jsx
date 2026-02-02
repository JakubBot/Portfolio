import React from "react";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import AnimatedHeader from "../Animated/Header";
import MediaViewer from "../Animated/MediaViewer";
import Description from "../Description";
import Divider from "../../common/Divider";
import { RenderTags } from "../../common/Tag";
import { typographyValues } from "../../../constants/typography";
import projectData from "../../../constants/projectData";
import IconWrapper from "../../common/IconWrapper";
import LinkComponent from "../../common/LinkComponent";
import { colorPalette } from "../../../constants/colorPalette";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const navButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-size: ${typographyValues.textL.fontSize}rem;
  font-weight: bold;
  color: ${colorPalette.text};
  transition: transform 0.3s ease;
`;

const underlineBoldStyle = css`
  text-decoration: underline;
  font-weight: bold;
`;

const ProjectContent = ({ projectId }) => {
  const project = projectData[projectId];

  const {
    header,
    videoHorizontal,
    videoVertical,
    tags,
    githubLink,
    horizontalDimensions,
    verticalDimensions,
    downloadLink,
    maxMediaWidth,

    documentationLink,
    documentationLinkTools, // used for aeropage project
  } = project ?? {};

  const projectKeys = Object.keys(projectData);
  const currentIndex = projectKeys.indexOf(projectId);
  const hasNext = currentIndex < projectKeys.length - 1;
  const hasPrev = currentIndex > 0;

  const nextId = hasNext ? projectKeys[currentIndex + 1] : null;
  const prevId = hasPrev ? projectKeys[currentIndex - 1] : null;

  console.log("githubLink", githubLink);
  console.log("downloadLink", downloadLink);

  return (
    <>
      <div
        key={projectId}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
          padding: 20px;
          max-width: 950px;
          // max-width: 1000px;
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
            stagger={0.03}
            mobileSize={typographyValues.textXxl.fontSize}
          />
        </div>

        <RenderTags tags={tags} />

        <MediaViewer
          mediaHorizontal={videoHorizontal}
          mediaVertical={videoVertical}
          horizontalDimensions={horizontalDimensions}
          verticalDimensions={verticalDimensions}
          maxMediaWidth={maxMediaWidth}
        />

        <Divider />

        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: left;
            gap: 3.5rem;
            width: 100%;
          `}
        >
          <Description id={projectId} />

          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 1rem;
            `}
          >
            {documentationLink && (
              <>
                <AnimatedHeader
                  text={"Project Documentation"}
                  fontSize={typographyValues.textSectionHeader.fontSize}
                  stagger={0}
                />

                <AnimatedHeader
                  stagger={0}
                  fontSize={typographyValues.textL.fontSize}
                  textBold={false}
                >
                  <span>
                    While the general documentation is available{" "}
                    <LinkComponent href={documentationLink}>
                      <span css={underlineBoldStyle}>here</span>
                    </LinkComponent>
                    

                    {!documentationLinkTools ? "." : ""} 
                  </span>

                  {documentationLinkTools && (
                    <span>
                      {", "}
                     I have personally authored the entire technical guide for the Dynamic Tools and APIs section, which you can find{" "}
                      <LinkComponent href={documentationLinkTools}>
                        <span css={underlineBoldStyle}>here</span>
                      </LinkComponent>
                      .
                    </span>
                  )}
                </AnimatedHeader>
              </>
            )}

            {(githubLink || downloadLink) && (
              <>
                <AnimatedHeader
                  text={"Project Link"}
                  fontSize={typographyValues.textSectionHeader.fontSize}
                  stagger={0}
                />

                <AnimatedHeader
                  stagger={0}
                  fontSize={typographyValues.textL.fontSize}
                  textBold={false}
                >
                  {githubLink && (
                    <span>
                      You can check out the full source code of this project on{" "}
                      <LinkComponent href={githubLink}>
                        <span css={underlineBoldStyle}>GitHub</span>
                      </LinkComponent>
                      .
                    </span>
                  )}

                  {downloadLink && (
                    <span>
                      {" "}
                      You can also download the documentation{" "}
                      <a
                        href={downloadLink}
                        download="Linear_Equations.pdf"
                        css={underlineBoldStyle}
                      >
                        here.
                      </a>
                    </span>
                  )}
                </AnimatedHeader>
              </>
            )}
          </div>

          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            `}
          >
            <LinkComponent href={`/projects/${prevId}`} disabled={!hasPrev}>
              <div
                css={[
                  navButtonStyle,
                  css`
                    &:hover {
                      transform: translateX(-5px);
                    }
                    ${!hasPrev &&
                    `
                    opacity: 0.5;
                    pointer-events: none;
                  `}
                  `,
                ]}
              >
                <IconWrapper Icon={FaArrowLeft} size={20} />
                <span>Prev</span>
              </div>
            </LinkComponent>

            <LinkComponent href={`/projects/${nextId}`} disabled={!hasNext}>
              <div
                css={[
                  navButtonStyle,
                  css`
                    &:hover {
                      transform: translateX(5px);
                    }
                  `,
                ]}
              >
                <span>Next</span>
                <IconWrapper Icon={FaArrowRight} size={20} />
              </div>
            </LinkComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
