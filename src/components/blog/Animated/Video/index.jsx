import React from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import useViewport from "../../../../hooks/useViewport";
import { css } from "@emotion/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const viewportMaxWidthForVerticalVideo = 550;
const Video = ({
  videoHorizontal,
  videoVertical,
  horizontalDimensions,
  verticalDimensions,
}) => {
  const player = useRef(null);
  const { width } = useViewport();

  const isVertical = width < viewportMaxWidthForVerticalVideo && videoVertical;
  const videoSrc = isVertical ? videoVertical : videoHorizontal;

  const defaultRatio = isVertical ? "9 / 16" : "16 / 9";
  const aspectRatio = isVertical
    ? verticalDimensions || defaultRatio
    : horizontalDimensions || defaultRatio;

  useEffect(() => {
    if (player.current) {
      gsap.to(player.current, {
        y: 25,
        duration: 1,
        ease: "power4.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        onComplete: () => {
          window.dispatchEvent(new Event("resize"));
          ScrollTrigger.refresh();
        },
      });
    }
  }, []);

  if (!videoSrc) return null;

  return (
    <>
      <div
        ref={player}
        css={css`
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;

          aspect-ratio: ${aspectRatio};

          background-color: #111;
          border-radius: 5px;

          top: -25px;
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        `}
      >
        <ReactPlayer
          controls={true}
          url={videoSrc}
          loop={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      {/* <div
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
          height={550}
          // height="auto"
        />
      </div> */}
    </>
  );
};

export default Video;
