import React from 'react';
import Marquee from '../../components/marquee';
import Navbar from '../../components/navbar';
import Projects from '../../components/projects';
import AboutMe from '../../components/aboutMe';

const Home = () => {
  return (
    <>
      <Navbar />
      <Marquee />
      <Projects />
      <AboutMe />
    </>
  );
};

export default Home;
