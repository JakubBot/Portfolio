import React from "react";
import { css } from "@emotion/react";
import Header from "../Animated/Header";
import { typographyValues } from "../../../constants/typography";
import RenderSection from "./RenderSection";
import { projectContent } from "../../../constants/projectsContent";

const Description = ({ id }) => {
  return (
    <>
      {projectContent?.[id]?.map((section, index) => (
        <RenderSection
          title={section.title}
          paragraphs={section.paragraphs}
          key={index}
        />
      ))}
    </>
  );
};

export default Description;
