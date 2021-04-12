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
        start: 'top-=120 top',
        end: '+=80',
        scrub: 1,
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
      <div className="about__description">
        <p>
          My name is <span className="light-dark">Jakub.</span>
        </p>
        <p>
          I <span className="light-dark">{"'"}am</span> young developer which{' '}
          <span className="light-dark">love</span> animations
        </p>
        <p>
          My journey started year ago when i realized that i like make websites
          and animations
        </p>
        <p>
          Currently for animations i use css keyframes, gsap, some framer motion
          or react transition group. My full list of skills are{' '}
          <span className="light-dark underline">here</span>
        </p>
        <p>
          If you have any questions or cooperation offer, just{' '}
          <span className="light-dark underline">email</span> me
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
