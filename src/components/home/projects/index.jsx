import React, { useEffect } from "react";
import Images from "./images";
import ProjectImages from "../../common/projectImages";
import "./index.scss";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <header className="projects__header">My Projects</header>

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.DynamicHtml}
          // dataImage={Images.Aeropage}
          link="https://builder.aeropage.io/"
          id="aeropage"
          text="Commercial Project & Commercial Project & "
          name="Aeropage Builder"
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Medai}
          link="/projects/rag"
          // link="https://github.com/PGRRT/rag"
          id="medical"
          text="Data & Innovation & Chat & Research & "
          name="Medical (RAG) - Research Project"
          right
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.LinearEquations2}
          link="https://github.com/JakubBot/linear_equations"
          text="Logic & Precision & Balance & Solve & "
          id="equations"
          name="Linear equations"
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Chess}
          link="https://jakubbot.github.io/Chess-Game"
          id="chess"
          text="Strategy & Focus & Patience & Victory & "
          name="Chess App"
          right
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Backgammon}
          link="https://github.com/JakubBot/BackGammon"
          id="backgammon"
          text="Roll & Move & Win & Repeat & "
          name="Backgammon"
        />
      </div>
    </>
  );
};

export default Projects;
