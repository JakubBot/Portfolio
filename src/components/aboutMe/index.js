import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.scss';

gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
  useEffect(() => {
    const background__wrapper = document.querySelector('.background__wrapper');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top-=150 top',
        end: '+=100',
        scrub: 2,
        toggleActions: 'play none none reverse',
      },
    });
    tl.to(background__wrapper, {
      background: '#000',
      duration: 1,
    }).to(
      '.about__header',
      {
        color: '#efefef',
        duration: 0.3,
      },
      '-=0.5'
    );
  }, []);
  return (
    <div className="about">
      <h3 className="about__header">About me</h3>
      <p className="about__description">
        My name is <span className="green">Jakub</span>
      </p>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
      <h1>s</h1>
    </div>
  );
};

export default AboutMe;
