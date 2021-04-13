import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { gsap } from 'gsap';
import './index.scss';

const CircleText = ({ text, id, left = true }) => {
  useEffect(() => {
    new CircleType(document.querySelector(`#${id}`)).radius(68);
    gsap.fromTo(
      '.circleText',
      {
        rotate: 0,
      },
      {
        rotate: 360,
        duration: 7,
        ease: 'none',
        repeat: -1,
      }
    );
  }, [id]);
  return (
    <button
      type="button"
      id={id}
      className={`circleText ${!left && 'circleText__right'}`}
    >
      <span>{text}</span>
    </button>
  );
};

export default CircleText;
