
import { css } from "@emotion/react";
import React from "react";
import Tag from "./Tag";
import { colorPalette } from "../../../constants/colorPalette";

const RenderTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: left;
        align-items: center;
      `}
    >
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
};

export default RenderTags;