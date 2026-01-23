import { css } from "@emotion/react";
import React from "react";
import LinkComponent from "../../common/LinkComponent";
import { colorPalette } from "../../../constants/colorPalette";
import { breakPointsMediaQueries } from "../../../constants/breakPoints";
import { typography } from "../../../constants/typography";

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

const NavBar = ({ category, timeRead }) => {
  return (
    <nav
      css={css`
        padding: 1.8rem 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      `}
    >
      <div css={[typography.textL, typography.textBold]}>
        <LinkComponent href="/">JB</LinkComponent>
      </div>
      <div
        css={[
          css`
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 5px;
          `,
        ]}
      >
        <span
          css={[
            typography.textL,
            css`
              color: ${colorPalette.textHeader};

              font-weight: bold;
            `,
          ]}
        >
          {category}
        </span>
        <span
          css={[
            typography.textL,
            css`
              font-weight: 500;
              @media (max-width: 768px) {
                display: none;
              }
            `,
          ]}
        >
          &#8226; {timeRead} min read
        </span>
      </div>
      <ul
        css={css`
          display: flex;
          gap: 1rem;
          list-style-type: none;
          margin: 0;
          padding: 0;
        `}
      >
        {links.map((link) => {
          return (
            <li key={link.name}>
              <LinkComponent
                href={link.href}
                css={[
                  typography.textL,
                  typography.textBold,
                  css`
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    &:hover {
                      color: rgb(61, 57, 57);
                    }
                  `,
                ]}
              >
                {link.name}
              </LinkComponent>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
