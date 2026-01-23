import React, { useEffect } from "react";
import Marquee from "../../components/home/marquee";
import Navbar from "../../components/home/navbar";
import Projects from "../../components/home/projects";
import AboutMe from "../../components/home/aboutMe";
import Footer from "../../components/home/footer";
// import Work from "../../components/home/work";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import "./index.scss";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


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
    <>
      <Navbar />
      <div className="background__wrapper">
        <Marquee />
        {/* <Work /> */}
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
