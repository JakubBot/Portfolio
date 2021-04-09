import React, { useEffect } from 'react';
import Images from './images';
import './index.scss';

const Projects = () => {
  useEffect(() => {
    import('./pixiImagesController').then((Controller) => {
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
            <div className="projects__images__scroller"></div>
          </div>

          <p className="projects__images__description">Chess app</p>
        </div>
        <div className="projects__images--right">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.OnlineShop}
          ></div>
          <p className="projects__images__description">Shop app</p>
        </div>
        <div className="projects__images">
          <div
            className="projects__images__image js-liquid-image"
            data-displacement-map={Images.DisplacementEffect}
            data-image={Images.Portfolio}
          ></div>
          <p className="projects__images__description">Portfolio</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
