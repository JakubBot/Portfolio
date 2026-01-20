import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./index.scss";

const Header = ({ text, fontSize = 48, delay, stagger }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".animated__char");

    gsap.from(chars, {
      y: fontSize,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: stagger || 0.03,
      delay: delay,
    });

    return () => {
      gsap.killTweensOf(chars);
    };
  }, [delay, fontSize, stagger]);

  return (
    <div
      ref={containerRef}
      style={{
        lineHeight: `${fontSize}px`,
      }}
    >
      {text?.split("").map((char, index) => (
        <span
          className="animated__char"
          key={index}
          style={{
            fontSize: fontSize,
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Header;
