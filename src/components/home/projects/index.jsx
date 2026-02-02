import React, { useEffect } from "react";
import Images from "./images";
import ProjectImages from "../../common/ProjectImages";
import "./index.scss";

const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <header className="projects__header">My Projects</header>

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.DynamicHtml}
          link="/projects/aeropage"
          id="aeropage"
          text="Commercial Project & Commercial Project & "
          name="Aeropage Builder"
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Medai}
          link="/projects/rag"
          id="medical"
          text="Data & Innovation & Chat & Research & "
          name="Medical (RAG) - Research Project"
          right
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.LinearEquations2}
          link="/projects/linear_equations"
          text="Logic & Precision & Balance & Solve & "
          id="equations"
          name="Linear equations"
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Backgammon}
          link="/projects/backgammon"
          id="backgammon"
          text="Roll & Move & Block & Win & Repeat & "
          name="Backgammon"
          right
        />

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Chess}
          link="/projects/chess"
          id="chess"
          text="Strategy & Focus & Patience & Victory & "
          name="Chess App"
        />
      </div>
    </>
  );
};

export default Projects;
