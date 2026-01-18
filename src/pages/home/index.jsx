import React, { useEffect } from "react";
import Marquee from "../../components/home/marquee";
import Navbar from "../../components/home/navbar";
import Projects from "../../components/home/projects";
import AboutMe from "../../components/home/aboutMe";
import Footer from "../../components/home/footer";
import SmoothPage from "../../components/home/smoothPage";
// import Work from "../../components/home/work";
import "./index.scss";

const Home = () => {
  useEffect(() => {
    // Lazy load the pixiImagesController component
    import("../../components/common/pixiImagesController").then(
      (Controller) => {
        
        let controller = new Controller.default();
        controller.init();
      },
    );
  }, []);

  return (
    <SmoothPage>
      <Navbar />
      <div className="background__wrapper">
        <Marquee />
        {/* <Work /> */}
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </SmoothPage>
  );
};

export default Home;
