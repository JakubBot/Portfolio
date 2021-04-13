import React, { useEffect } from 'react';
import Marquee from '../../components/marquee';
import Navbar from '../../components/navbar';
import Projects from '../../components/projects';
import AboutMe from '../../components/aboutMe';
import Footer from '../../components/footer';
import SmoothPage from '../../components/smoothPage';


import './index.scss';

const Home = () => {

  return (
    // <div className="viewport">
    //   <div id="scroll-container" className="scroll-container">
        <SmoothPage>
          <Navbar />
          <div className="background__wrapper">
            <Marquee />
            <Projects />
            <AboutMe />
            <Footer />
          </div>
        </SmoothPage>
      // </div>
    // </div>
  );
};

export default Home;
