import { css } from "@emotion/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { typography } from "../../../../constants/typography";
import { colorPalette } from "../../../../constants/colorPalette";

const Header = ({ text, fontSize = 3, delay, stagger }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".animated__char");

    const anim = gsap.from(chars, {
      yPercent: 110,
      // y: `${fontSize}rem`,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: stagger || 0.03,
      delay: delay,
    });

    return () => {
      anim.kill();
    };
  }, [delay, fontSize, stagger]);

  const words = text?.split(" ");

  return (
    <div ref={containerRef}>
      {words?.map((word, wordIndex) => (
        <span
          key={wordIndex}
          css={css`
            display: inline-block;
            white-space: nowrap;
            margin-right: ${fontSize / 4}rem;
            overflow: hidden;
            vertical-align: top;
          `}
        >
          {word.split("").map((char, charIndex) => (
            <span
              className="animated__char"
              key={charIndex}
              css={[
                typography.textBold,
                css`
                  color: ${colorPalette.textHeader};
                  font-size: ${fontSize}rem;
                  display: inline-block;
                `,
              ]}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default Header;
