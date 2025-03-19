import React, { useEffect } from "react";
import Marquee from "../../components/marquee";
import Navbar from "../../components/navbar";
import Projects from "../../components/projects";
import AboutMe from "../../components/aboutMe";
import Footer from "../../components/footer";
import SmoothPage from "../../components/smoothPage";
import Work from "../../components/work";
import "./index.scss";

const Home = () => {
  useEffect(() => {
    // Lazy load the pixiImagesController component
    import("../../components/common/pixiImagesController").then(
      (Controller) => {
        let controller = new Controller.default();
        controller.init();
      }
    );
  }, []);

  return (
    <SmoothPage>
      <Navbar />
      <div className="background__wrapper">
        <Marquee />
        <Work />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </SmoothPage>
  );
};

export default Home;
