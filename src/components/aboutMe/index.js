import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.scss";

gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
  useEffect(() => {
    const background__wrapper = document.querySelector(".background__wrapper");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top-=280 top",
        end: "+=80",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
    tl.to(background__wrapper, {
      background: "#000",
      duration: 1,
    }).to(
      ".about__header",
      {
        color: "#efefef",
        duration: 0.3,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="about" id="about">
      <h3 className="about__header">About me</h3>
      <div className="about__description">
        <p>
          Jakub <span className="light-dark">Bot</span>
        </p>
        <p>
          I am a <span className="light-dark">4th-semester</span> Computer
          Science student at the Gdańsk University of Technology with 2 years of
          commercial experience in Web Development.
        </p>
        <p>
          My journey into coding began in high school, where I started with C,
          then moved on to C++, C#, and eventually <span className="light-dark">JavaScript</span>.
        </p>
        <p>
          Right after graduation, I began working remotely as a <span className="light-dark">Frontend
          Developer</span> at Aeropage.io, where I was responsible for building tools
          integrated with Airtable. Working in a team taught me the importance
          of effective communication, task planning, and always asking, ‘What is
          the purpose of this feature?’.
        </p>
        <p>
          After over a year, I started studying at the <span className="light-dark">Gdańsk University of
          Technology</span>, where I am currently pursuing my degree. Balancing work
          and studies has given me valuable experience in time management and
          multitasking.
        </p>
        <p>
          Throughout my two years at university, <span className="light-dark">I’ve</span> explored a wide range of
          topics — from low-level programming in assembly and writing Bash scripts
          to understanding data structures and analyzing their time complexity.
        </p>

        <p>
          My full list of skills are here:{" "}
          <a
            href="https://github.com/JakubBot/Portfolio"
            className="light-dark underline"
            aria-label="Visit GitHub Repository - opens in new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </p>
        <p>
          If you have any questions or cooperation offer, just{" "}
          <a href="mailto:bkuba1401@gmail.com" className="light-dark underline">
            email
          </a>{" "}
          me
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
