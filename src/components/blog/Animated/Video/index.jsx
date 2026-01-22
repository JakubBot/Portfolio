import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import useViewport from "../../../../hooks/useViewport";
import { jsx, css } from "@emotion/react";
import "./index.scss";

const viewportMaxWidthForVerticalVideo = 550;
const Video = ({ videoHorizontal, videoVertical }) => {
  const player = useRef(null);
  const { width } = useViewport();

  const videoSrc =
    width < viewportMaxWidthForVerticalVideo && videoVertical
      ? videoVertical
      : videoHorizontal;

  useEffect(() => {
    if (player.current) {
      gsap.to(player.current, {
        y: 25,
        duration: 1,
        ease: "power4.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        delay: 0.5,
        onComplete: () => {
          window.dispatchEvent(new Event("resize"));
        },
      });
    }
  }, []);

  return (
    <>
      <div ref={player} className="mp4-view">
        <ReactPlayer
          controls={true}
          url={videoSrc}
          // url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          // playing={true}
          loop={true}
          width={1000}
          // width={750}
          height="auto"
        />
      </div>
    </>
  );
};

export default Video;
