import React from 'react';
import Marquee from '../../components/marquee';
import Navbar from '../../components/navbar';
import Projects from '../../components/projects';
import AboutMe from '../../components/aboutMe';
import Footer from '../../components/footer';

import './index.scss';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background__wrapper">
        <Marquee />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
