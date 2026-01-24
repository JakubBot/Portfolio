import React from "react";
import { css } from "@emotion/react";
import Header from "../Animated/Header";
import { typographyValues } from "../../../constants/typography";

// Style zdefiniowane na zewnątrz dla wydajności
const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const paragraphsWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const RenderSection = ({ title, paragraphs }) => {
  if (!title && (!paragraphs || paragraphs.length === 0)) return null;

  return (
    <div css={sectionStyle}>
      {title && (
        <Header
          text={title}
          stagger={0}
          fontSize={typographyValues.textSectionHeader.fontSize}
        />
      )}

      {paragraphs && paragraphs.length > 0 && (
        <div css={paragraphsWrapperStyle}>
          {paragraphs.map((paragraph, index) => (
            <Header
              key={index}
              text={paragraph}
              stagger={0} 
              fontSize={typographyValues.textL.fontSize}
              textBold={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RenderSection;