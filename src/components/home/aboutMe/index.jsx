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
      "-=0.5",
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
          <span className="light-dark">I am</span> a Computer Science student at
          Gdańsk University of Technology and a Fullstack Developer with over 2
          years of commercial experience. I specialize in bridging modern
          frontends with high-efficiency, distributed backends.
        </p>
        <p>
          <span className="light-dark">Commercial Experience</span> At
          Aeropage.io, I managed infrastructure for over 10,000 users. I
          developed high-performance data engines—including a WordPress Sync
          plugin with 8,000+ installs—focusing on API cost optimization
          and efficient bulk data processing.
        </p>
        <p>
          <span className="light-dark">Research & Performance</span> Currently,
          I focus on performance engineering and distributed systems. I research
          Java 25 Virtual Threads and Scatter-Gather patterns, using JMH
          profiling to analyze throughput and I/O latency. I don't rely on
          intuition; I ensure every architectural decision is backed by raw
          data.
        </p>
        <p>
          <span className="light-dark">My Mindset</span>, I follow a
          "performance-first" philosophy. My goal is to build software that is
          not just functional, but predictable, scalable, and
          resource-efficient.
        </p>

        <p>
          Check out my projects on:{" "}
          <a
            href="https://github.com/JakubBot/"
            className="light-dark underline"
            aria-label="Visit GitHub Repository - opens in new tab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          or reach out via{" "}
          <a href="mailto:bkuba1401@gmail.com" className="light-dark underline">
            email
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
