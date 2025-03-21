import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import timeLine from "./gsapAnimations";
import Images from "./images";

import "./index.scss";

gsap.registerPlugin(ScrollToPlugin);

let controller = null;
let tl = null;
const Navbar = () => {
  const hamburger = useRef(null);
  const [navStatus, setNavStatus] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".menu__scroller ul li a");
    const body = document.querySelector("body");
    tl = timeLine(body);

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        setNavStatus(false);

        let scrollTarget = link.getAttribute("href");

        tl.reverse().then(() => {
          gsap.to(window, {
            duration: 2.2,
            scrollTo: scrollTarget,
            ease: "expo.inOut",
          });
        });
        hamburger.current.setAttribute("aria-expanded", "false");
      });
    });

    const ListController = import("./pixiListController.js");
    ListController.then((Controller) => {
      controller = new Controller.default();
      controller.init();
    });
  }, []);

  useEffect(() => {
    controller && controller.updateNavStatus(navStatus);
  }, [navStatus]);

  const hamburgerClick = (e) => {
    if (e.target.getAttribute("aria-expanded") === "false") {
      setNavStatus(true);
      gsap.to(window, { duration: 0.5, scrollTo: 0 }).then(() => {
        tl.play();
      });

      e.target.setAttribute("aria-expanded", "true");
    } else {
      setNavStatus(false);

      tl.reverse();

      e.target.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav__hamburger">
          <span
            ref={hamburger}
            onClick={hamburgerClick}
            aria-expanded="false"
            className="nav__hamburger__span icon-menu"
            name="menu-outline"
          ></span>
        </div>
      </nav>
      <div className="container">
        <header className="container__header">Minimal Design</header>
        <header className="container__name">Jakub | Bot</header>
        <h4 className="container__hello">
          <span>Hel</span>
          <span>lo</span>
        </h4>
        <ul className="socials">
          <a href="#a" className="socials__link">
            <li className="socials__link__item">
              <ion-icon
                name="logo-facebook"
                className="socials__link__icon"
              ></ion-icon>
            </li>
          </a>
          <a href="#a" className="socials__link">
            <li className="socials__link__item">
              <ion-icon
                name="logo-instagram"
                className="socials__link__icon"
              ></ion-icon>
            </li>
          </a>
          <a href="#a" className="socials__link">
            <li className="socials__link__item">
              <ion-icon
                name="logo-twitter"
                className="socials__link__icon"
              ></ion-icon>
            </li>
          </a>
        </ul>
        <ul className="menu js-portfolio">
          <div className="menu__informations">
            <div className="menu__links menu__scroller">
              <ul className="menu__links__list">
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#content">
                    <span className="number">01. </span>
                    <span className="destination">Home /</span>
                    <span className="describe">intro</span>
                  </a>
                </li>

                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#work">
                    <span className="number">02. </span>
                    <span className="destination">Work /</span>
                    <span className="describe">experience</span>
                  </a>
                </li>
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#projects">
                    <span className="number">03. </span>
                    <span className="destination">Portfolio /</span>
                    <span className="describe">my projects</span>
                  </a>
                </li>
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#about">
                    <span className="number">04. </span>
                    <span className="destination">About me/</span>
                    <span className="describe">history</span>
                  </a>
                </li>
                <li className="js-portfolio-item menu__links__list__item">
                  <a href="#footer">
                    <span className="number">05. </span>
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
                  >
                    <span className="icon-github-circled icon-dark" />
                  </a>
                </li>
                <li className="menu__links__list__item">
                  <a
                    href="https://www.google.com/intl/pl/gmail/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-mail-alt icon-dark" />
                  </a>
                </li>
                <li className="menu__links__list__item">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009801185275"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-facebook-squared icon-dark" />
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
