import React, { useEffect } from 'react';
import Images from './images';
import './index.scss';

const Projects = () => {
  useEffect(() => {
    import('./pixiImagesController').then((Controller) => {
      let controller = new Controller.default();
      controller.init();
    });
  });
  return (
    <>
      <div className="projects">
        <header className="projects__header">Projects</header>

        <div className="projects__images">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.ChessImg}
          ></div>
          <p className="projects__images__description">Chess app</p>
        </div>
        <div className="projects__images--right">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.ChessImg}
          ></div>
          <p className="projects__images__description">Shop app</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
