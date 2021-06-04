import React, { useEffect } from "react";
import Images from "./images";
import ProjectImages from "./projectImages";
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

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Chess}
          link="https://jakubbot.github.io/Chess-Game/"
          id="firstText"
          text="Design & Design & Design & Design &"
        />
        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.OnlineShop}
          link="https://jakubbot.github.io/sklep-vanilla-js/"
          text="Smooth & Smooth & Smooth & Smooth &"
          id="secondText"
          right={true}
        />
        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Portfolio}
          link="https://jakubbot.github.io/Portfolio/"
          text="Creativity & Creativity & Creativity & "
          id="thirdText"
        />
      </div>
    </>
  );
};

export default Projects;
