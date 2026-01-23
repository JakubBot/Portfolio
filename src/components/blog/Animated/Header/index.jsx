import { css } from "@emotion/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { typography } from "../../../../constants/typography";
import { colorPalette } from "../../../../constants/colorPalette";
import useViewport from "../../../../hooks/useViewport";

const Header = ({
  text,
  fontSize,
  delay,
  stagger = 0.03,
  mobileSize,
  textBold = true,
}) => {
  const containerRef = useRef(null);
  const { isMobile } = useViewport();

  const currentFont = isMobile && mobileSize ? mobileSize : fontSize;

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".animated__char");

    const anim = gsap.from(chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=15%",
        toggleActions: "play none none reverse",
      },

      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: stagger,
      delay: delay,
    });

    return () => {
      anim.kill();
    };
  }, [delay, stagger]);

  const words = text?.split(" ");

  return (
    <div ref={containerRef}>
      {words?.map((word, wordIndex) => (
        <span
          key={wordIndex}
          css={css`
            display: inline-block;
            white-space: nowrap;
            margin-right: ${currentFont / 4}rem;
            overflow: hidden;
            vertical-align: top;
          `}
        >
          {word.split("").map((char, charIndex) => (
            <span
              className="animated__char"
              key={charIndex}
              css={[
                textBold && typography.textBold,
                css`
                  color: ${colorPalette.textHeader};
                  font-size: ${currentFont}rem;
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
