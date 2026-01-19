import React from "react";
import ReactPlayer from "react-player";
import "./preview.scss";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import Animation from "./animation.mp4";
import "./preview.scss";

const Preview = () => {
  const player = useRef(null);
  // const image = useRef(null);

  // useEffect(() => {
  //   if (image.current) {
  //     gsap.to(image.current, {
  //       y: 25,
  //       duration: 1,
  //       ease: "power4.inOut",
  //       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  //       delay: 0.5,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (player.current) {
      gsap.to(player.current, {
        y: 25,
        duration: 1,
        ease: "power4.inOut",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <>
      <div ref={player} className="mp4-view background__wrapper">
        <ReactPlayer
          controls={true}
          url={Animation}
          // url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          // playing={true}
          loop={true}
          // className="preview__video"
          width={960}
          height={540}
          // height={200}
        />
      </div>

      {/* <div ref={image} className="img-view">
        <img
          // src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdtZmo4Z3Y4MG0xanM0b2MweDJnNzVibWoxbGFhbXZuOXNlZzFseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vjgpP8hFxrFsL0cbuC/giphy.gif"
          src="https://videos.openai.com/az/vg-assets/task_01k9c77g4deqfrkwe2rhx6nx50%2F1762420666_img_0.webp?se=2026-01-24T20%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-18T02%3A33%3A01Z&ske=2026-01-25T02%3A38%3A01Z&sks=b&skv=2024-08-04&sig=e0MnrTqmTAroEVcHQ4UUdG0FdlohTUhn9Ulab1fzlFI%3D&ac=oaivgprodscus2"
          alt="Video Preview"
          // height={300}
          // width={300}
        />
      </div> */}
    </>
  );
};

export default Preview;
