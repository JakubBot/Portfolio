import React from "react";
import { css } from "@emotion/react";

const IconWrapper = ({
  children,
  Icon,
  size = 22,
  color,
  hoverColor,
  onClick,
}) => {
  return (
    <>
      <Icon
        onClick={onClick}
        size={size}
        css={css`
          color: ${color} !important;
          cursor: pointer !important;

          ${hoverColor &&
          css`
            &:hover {
              color: ${hoverColor} !important;
            }
          `}
        `}
      />
      {children}
    </>
  );
};

export default IconWrapper;
