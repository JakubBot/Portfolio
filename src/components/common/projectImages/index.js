import React from 'react';
import CircleText from '../CircleText';
import './index.scss';

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
    <div className={`projects__images${right ? '--right' : ''}`}>
      <div
        className="projects__images__image js-liquid-image"
        data-displacement-map={dataDisplacementMap}
        data-image={dataImage}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="projects__images__scroller"></div>
        </a>
        <CircleText text={text} id={id} left={!right} />
      </div>

      <p className="projects__images__description">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
    </div>
  );
};

export default ProjectImages;
