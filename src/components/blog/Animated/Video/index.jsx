import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import useViewport from "../../../../hooks/useViewport";
import { css } from "@emotion/react";

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
      <div
        ref={player}
        css={css`
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          position: relative;
          top: -25px;
          display: flex;
          justify-content: center;
          width: 100%;
          video {
            border-radius: 5px;
          }
        `}
      >
        <ReactPlayer
          controls={true}
          url={videoSrc}
          loop={true}
          width={900}
          height="auto"
        />
      </div>
    </>
  );
};

export default Video;
