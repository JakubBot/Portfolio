import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/blog/navbar";
import AnimatedHeader from "../../components/blog/AnimatedHeader";
import "./index.scss";

const Projects = () => {
  const { id } = useParams();

  console.log("id", id);

  const header = "Rag"

  return (

<div className="blog__container">
    <NavBar />
    <div className="blog__container__content">
    <AnimatedHeader text={header} />
    {/* <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
    </div>
</div>

  )
};

export default Projects;
