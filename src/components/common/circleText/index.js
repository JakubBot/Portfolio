import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { gsap } from 'gsap';
import './index.scss';

const CircleText = () => {
  useEffect(() => {
    new CircleType(document.querySelector('.circleText')).radius(80);
    gsap.to('.circleText', {
      rotate: 360,
      duration: 8,
      ease: 'none',
      repeat: -1,
    });
  }, []);
  return (
    <button type="button" className="circleText">
      <span>Send & Here & Send & Here &</span>
    </button>
  );
};

export default CircleText;
