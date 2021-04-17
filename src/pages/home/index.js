import React from "react";
import Marquee from "../../components/marquee";
import Navbar from "../../components/navbar";
import Projects from "../../components/projects";
import AboutMe from "../../components/aboutMe";
import Footer from "../../components/footer";
import SmoothPage from "../../components/smoothPage";

import "./index.scss";

const Home = () => {
  return (
    <SmoothPage>
      <Navbar />
      <div className="background__wrapper">
        <Marquee />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </SmoothPage>
  );
};

export default Home;
