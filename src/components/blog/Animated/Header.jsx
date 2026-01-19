import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./header.scss";

const Header = ({ text, fontSize, delay, y,stagger }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".animated__char");

    gsap.from(chars, {
      y: y || 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: stagger || 0.03,
      delay: delay,
    });

    return () => {
      gsap.killTweensOf(chars);
    };
  }, [delay, y, stagger]);

  return (
    <div ref={containerRef}>
      {text?.split("").map((char, index) => (
        <span
          className="animated__char"
          key={index}
          style={{
            fontSize: fontSize || 48,
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
