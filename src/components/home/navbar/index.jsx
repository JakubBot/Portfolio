import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import timeLine from "./gsapAnimations.js";
import Images from "./images.js";

import "./index.scss";



let controller = null;
let tl = null;
const Navbar = () => {
  const hamburger = useRef(null);
  const [navStatus, setNavStatus] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".menu__scroller ul li a");
    const body = document.querySelector("body");
    tl = timeLine(body);
    const handleLinkClick = (e) => {
      e.preventDefault();
      setNavStatus(false);

      let scrollTarget = e.currentTarget.getAttribute("href");

      tl.reverse().then(() => {
        gsap.to(window, {
          duration: 2.2,
          scrollTo: scrollTarget,
          ease: "expo.inOut",
        });
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    const ListController = import("./pixiListController.js");
    ListController.then((Controller) => {
      controller = new Controller.default();
      controller.init();
    });
    return () => {
      controller.destroy && controller.destroy();
      controller = null;

      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });

      tl.kill();
      tl = null;
    };
  }, []);

  useEffect(() => {
    controller && controller.updateNavStatus(navStatus);
  }, [navStatus]);

  const hamburgerClick = (e) => {
    const button = e.currentTarget;
    const expanded = button.getAttribute("aria-expanded") === "true";

    if (!expanded) {
      setNavStatus(true);
      gsap.to(window, { duration: 0.5, scrollTo: 0 }).then(() => {
        tl.play();
      });

      button.setAttribute("aria-expanded", "true");
    } else {
      setNavStatus(false);

      tl.reverse();

      button.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <div className="wrapper" id="home_screen">
      <nav className="nav" aria-label="Main navigation">
        <button
          type="button"
          className="nav__hamburger"
          ref={hamburger}
          onClick={hamburgerClick}
          aria-expanded="false"
          aria-controls="main-menu"
          aria-label={navStatus ? "Close menu" : "Open menu"}
        >
          <span className="nav__hamburger__span icon-menu"></span>
        </button>
      </nav>

    

      <div className="container">
        <header className="container__header">Minimal Design</header>
        <header className="container__name">Jakub | Bot</header>
        <h4 className="container__hello">
          <span>Hel</span>
          <span>lo</span>
        </h4>
       
        <div
          id="main-menu"
          className="menu js-portfolio"
          aria-hidden={!navStatus}
        >
          <div className="menu__informations">
            <div className="menu__links menu__scroller">
              <ul className="menu__links__list">
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#home_screen">
                    <span className="number">01. </span>
                    <span className="destination">Home/</span>
                    <span className="describe">intro</span>
                  </a>
                </li>

                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#projects">
                    <span className="number">02. </span>
                    <span className="destination">Portfolio /</span>
                    <span className="describe">my projects</span>
                  </a>
                </li>
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#about">
                    <span className="number">03. </span>
                    <span className="destination">About me/</span>
                    <span className="describe">history</span>
                  </a>
                </li>
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#footer">
                    <span className="number">04. </span>
                    <span className="destination">Contact /</span>
                    <span className="describe">say hello</span>
                  </a>
                </li>
              </ul>
              <div className="text">
                <span>Hard</span>
                <span>work</span>
              </div>
            </div>
            <div className="menu__social-icons menu__links">
              <ul className="menu__links__list">
                <li className="menu__links__list__item">
                  <a
                    href="https://github.com/JakubBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <span className="icon-github-circled icon-dark" />
                  </a>
                </li>
                <li className="menu__links__list__item">
                  <a
                    href="https://www.linkedin.com/in/jakub-bot-169277286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <span className="icon-linkedin-squared icon-dark" />
                  </a>
                </li>
                <li className="menu__links__list__item">
                  <a
                    href="https://www.google.com/intl/pl/gmail/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email contact"
                  >
                    <span className="icon-mail-alt icon-dark" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu__images">
            <div
              className="menu__images__canvas js-portfolio-canvas"
              data-displacement-map={Images.DisplacementEffect}
            ></div>
            <ul className="menu__images__list js-portfolio-preview-list">
              <li
                className="menu__images__item js-portfolio-preview-item"
                data-portfolio-preview={Images.Work1}
              ></li>

              <li
                className="menu__images__item js-portfolio-preview-item"
                data-portfolio-preview={Images.Work2}
              ></li>

              <li
                className="menu__images__item js-portfolio-preview-item"
                data-portfolio-preview={Images.Work3}
              ></li>

              <li
                className="menu__images__item js-portfolio-preview-item"
                data-portfolio-preview={Images.Work4}
              ></li>

              <li
                className="menu__images__item js-portfolio-preview-item"
                data-portfolio-preview={Images.Work5}
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
