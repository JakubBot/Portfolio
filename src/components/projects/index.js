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
          link="https://jakubbot.github.io/Chess-Game"
          id="firstText"
          text="Design & Design & Design & Design &"
          name="Chess App"

        />
        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.OnlineShop}
          link="https://shopify-rouge.vercel.app"
          text="Smooth & Smooth & Smooth & Smooth &"
          id="secondText"
          right={true}
          name="Shop App"

        />
        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Portfolio}
          link="https://jakubbot.github.io/SphereAnimationThreeJs"
          text="Creativity & Creativity & Creativity & "
          id="thirdText"
          name="Three.js animations"
        />
      </div>
    </>
  );
};

export default Projects;
