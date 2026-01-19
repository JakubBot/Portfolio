import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/blog/navbar";
import AnimatedHeader from "../../components/blog/Animated/Header";
import Preview from "../../components/blog/Animated/Preview";

import "./index.scss";

const Projects = () => {
  const { id } = useParams();

  console.log("id", id);

  const header = "Rag Research Project";
  const subTitle =
    "Backend Architecture • Java Systems • Scalable RAG Infrastructure";

  return (

    <div className="blog__container">
      <NavBar />
      <div className="blog__content">
        <div className="blog__header-wrapper">
          <AnimatedHeader
            text={header}
            fontSize={56}
            delay={0.5}
            y={60}
            stagger={0.03}
          />
        </div>

        <div className="blog__subtitle-wrapper">
          <AnimatedHeader
            text={subTitle}
            fontSize={28}
            delay={0.7}
            y={30}
            stagger={0.015}
          />
        </div>

       <Preview />
        {/* <video
          width="100%"
          height="auto"
          controls 
          muted 
          loop
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video> */}
      </div>
    </div>

  );
};

export default Projects;
