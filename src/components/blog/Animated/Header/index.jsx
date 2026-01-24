import { css } from "@emotion/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { typography } from "../../../../constants/typography";
import { colorPalette } from "../../../../constants/colorPalette";
import useViewport from "../../../../hooks/useViewport";
import { useMemo } from "react";

const wordWrapperStyle = css`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

const charStyle = css`
  display: inline-block;
  color: ${colorPalette.textHeader};
  will-change: transform, opacity;
  opacity: 0;
`;

const Header = ({
  text,
  fontSize,
  stagger = 0.03, // if set to 0, it renders all at once
  mobileSize,
  textBold = true,
  children,
}) => {
  const containerRef = useRef(null);
  const { isMobile } = useViewport();

  const currentFont = isMobile && mobileSize ? mobileSize : fontSize;

  const dynamicStyles = useMemo(() => {
    return {
      word: css`
        margin-right: ${currentFont / 4}rem;
      `,
      char: css`
        font-size: ${currentFont}rem;
      `,
      bold: textBold ? typography.textBold : undefined,
    };
  }, [currentFont, textBold]);

  useEffect(() => {
    let anim;

    const rafId = requestAnimationFrame(() => {
      if (!containerRef.current) return;

      const chars = containerRef.current.querySelectorAll(".animated");

      anim = gsap.fromTo(
        chars,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=12%",
            toggleActions: "play none none reverse",
          },

          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: stagger,
          onComplete: () => {
            gsap.set(chars, { clearProps: "willChange" });
          },
        },
      );
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (anim) anim.kill();
    };
  }, [stagger]);

  const words = useMemo(() => text?.split(" ") || [], [text]);
  const renderAllAtOnce = stagger === 0;

  return (
    <div ref={containerRef}>
      {children ? (
        <span
          className="animated"
          css={[charStyle, dynamicStyles.char, dynamicStyles.bold]}
        >
          {children}
        </span>
      ) : renderAllAtOnce ? (
        <span
          className="animated"
          css={[charStyle, dynamicStyles.char, dynamicStyles.bold]}
        >
          {text}
        </span>
      ) : (
        <>
          {words?.map((word, wordIndex) => (
            <span key={wordIndex} css={[wordWrapperStyle, dynamicStyles.word]}>
              {word.split("").map((char, charIndex) => (
                <span
                  className="animated"
                  key={charIndex}
                  css={[charStyle, dynamicStyles.char, dynamicStyles.bold]}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Header;
