import React, { useEffect } from "react";
import { gsap } from "gsap";


import "./index.scss";

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
          I am a <span className="light-dark">5th-semester</span> Computer
          Science student at the Gdańsk University of Technology and a fullstack
          developer with over 2 years of commercial web development experience.
        </p>
        <p>
          My coding journey began in high school with{" "}
          <span className="light-dark">C++ and C#</span>, but I soon discovered
          my passion for <span className="light-dark">JavaScript and Java</span>
          , which became the foundation of my development career.
        </p>
        <p>
          Right after graduation, I began working remotely as a{" "}
          <span className="light-dark">
            Fullstack Developer (focused on frontend)
          </span>{" "}
          at Aeropage.io, where I was responsible for building tools integrated
          with Airtable. Working in a team taught me the importance of effective
          communication, task planning, and always asking, ‘What is the purpose
          of this feature?’.
        </p>
        <p>
          After over a year, I started studying at the{" "}
          <span className="light-dark">Gdańsk University of Technology</span>,
          where I am currently pursuing my degree. Balancing work and studies
          has given me valuable experience in time management and multitasking.
        </p>
        <p>
          Throughout my two years at university,{" "}
          <span className="light-dark">I’ve</span> explored a wide range of
          topics — from low-level programming in assembly and writing Bash
          scripts to understanding data structures and analyzing their time
          complexity.
        </p>

        <p>
          My full list of skills are here:{" "}
          <a
            href="https://github.com/JakubBot/"
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
