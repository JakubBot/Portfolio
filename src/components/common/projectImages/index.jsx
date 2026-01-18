import React from "react";
import CircleText from "../CircleText";
import "./index.scss";
import LinkComponent from "../LinkComponent";

const ProjectImages = ({
  right = false,
  dataDisplacementMap,
  dataImage,
  link,
  text,
  id,
  name,
}) => {
  return (
    <div className={`projects__images${right ? "--right" : ""}`}>
      <div
        className="projects__images__image js-liquid-image"
        data-displacement-map={dataDisplacementMap}
        data-image={dataImage}
      >
        <LinkComponent href={link} className="page_transition_link">
          <div className="projects__images__scroller"></div>
        </LinkComponent>
        {text && <CircleText text={text} id={id} left={!right} />}
      </div>

      <p className="projects__images__description">
        <LinkComponent href={link} className="page_transition_link">
          {name}
        </LinkComponent>
      </p>
    </div>
  );
};

export default ProjectImages;
