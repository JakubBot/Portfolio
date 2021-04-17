import React, { useEffect } from "react";
import Images from "./images";
import CircleText from "../common/CircleText";
import "./index.scss";

const Projects = () => {
  useEffect(() => {
    import("./pixiImagesController").then((Controller) => {
      let controller = new Controller.default();
      controller.init();
    });
  }, []);
  return (
    <>
      <div className="projects" id="projects">
        <header className="projects__header">My Work</header>

        <div className="projects__images">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.Chess}
          >
            <a
              href="https://jakubbot.github.io/Chess-Game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects__images__scroller"></div>
            </a>
          </div>

          <p className="projects__images__description">Chess app</p>
          <CircleText
            text="Design & Design & Design & Design &"
            id="firstText"
          />
        </div>
        <div className="projects__images--right">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.OnlineShop}
          >
            <a
              href="https://jakubbot.github.io/sklep-vanilla-js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects__images__scroller"></div>
            </a>
          </div>
          <p className="projects__images__description">Shop app</p>
          <CircleText
            text="Smooth & Smooth & Smooth & Smooth &"
            id="secondText"
            left={false}
          />
        </div>
        <div className="projects__images">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.Portfolio}
          >
            <a
              href="https://jakubbot.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="projects__images__scroller"></div>
            </a>
          </div>
          <p className="projects__images__description">Portfolio</p>
          <CircleText
            text="Creativity & Creativity & Creativity & Creativity &"
            id="thirdText"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
