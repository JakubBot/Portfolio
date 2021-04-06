import React from 'react';

import './index.scss'

const Marquee = () => {
  return (
    <div className="menu__item">
    <div className="marquee">
      <div className="marquee__inner" aria-hidden="true">
        <span>Style</span>
        <span>Style</span>
        <span>Style</span>
        <span>Style</span>
      </div>
    </div>
  </div>
  );
};

export default Marquee;