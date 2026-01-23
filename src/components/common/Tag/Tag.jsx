import { css } from "@emotion/react";
import React from "react";
import { typography } from "../../../constants/typography";
import { colorPalette } from "../../../constants/colorPalette";

const Tag = ({ text }) => {
  return (
    <span
      css={[
        typography.textS,
        css`
          display: inline-block;
          padding: 0.5rem 1rem;
          background: transparent;
          color: ${colorPalette.text};
          border: 1px solid ${colorPalette.border};
          border-radius: 1.5rem;
          font-weight: 600;
          text-align: center;
          white-space: nowrap;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `,
      ]}
    >
      {text}
    </span>
  );
};

export default Tag;
