import React from "react";
import CircleText from "../common/CircleText";
import "./index.scss";
const ProjectImages = ({
  right = false,
  dataDisplacementMap,
  dataImage,
  link,
  text,
  id,
}) => {
  return (
    <div className={`projects__images${right ? "--right" : ""}`}>
      <div
        className="projects__images__image js-liquid-image"
        data-displacement-map={dataDisplacementMap}
        data-image={dataImage}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="projects__images__scroller"></div>
        </a>
      </div>

      <p className="projects__images__description">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Chess app
        </a>
      </p>
      <CircleText text={text} id={id} left={!right} />
    </div>
  );
};

export default ProjectImages;
