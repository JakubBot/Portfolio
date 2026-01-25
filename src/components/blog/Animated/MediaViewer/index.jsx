import React, { useEffect, useRef, useMemo } from "react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { css } from "@emotion/react";
import useViewport from "../../../../hooks/useViewport";
import isPdfFile from "../../../../utils/isPdfFile";
import formatParams from "../../../../utils/formatParams";

const viewportMaxWidthForVerticalVideo = 550;

const MediaViewer = ({
  mediaHorizontal,
  mediaVertical,
  horizontalDimensions,
  verticalDimensions,

  maxMediaWidth,

  fitHeightPdf = true,
  hideToolbarPdf = true,
}) => {
  const containerRef = useRef(null);
  const { width } = useViewport();

  const isVerticalView = width < viewportMaxWidthForVerticalVideo;
  const isUsingVerticalMedia = isVerticalView && mediaVertical;

  const currentSource = isUsingVerticalMedia ? mediaVertical : mediaHorizontal;

  const isPdf = useMemo(() => isPdfFile(currentSource), [currentSource]);

  const finalPdfUrl = useMemo(() => {
    if (!isPdf || !currentSource) return currentSource;

    // Obiekt z opcjami - tu łatwo dodasz nowe
    const options = {
      view: fitHeightPdf ? "FitV" : "FitH", // FitH naprawia problem "oddalenia"
      // zoom: 100,
      toolbar: hideToolbarPdf ? 0 : 1,
      navpanes: 0, // ukrywa boczne menu
    };

    return `${currentSource}${formatParams(options)}`;
  }, [currentSource, isPdf, fitHeightPdf, hideToolbarPdf]);

  const defaultRatio = isUsingVerticalMedia || isPdf ? "3 / 4" : "16 / 9";

  const aspectRatio = isUsingVerticalMedia
    ? verticalDimensions || defaultRatio
    : horizontalDimensions || defaultRatio;

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
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

  if (!currentSource) return null;

  return (
    <div
      ref={containerRef}
      css={css`
        position: relative;
        width: 100%;
        max-width: ${maxMediaWidth || 1000}px;
        margin: 0 auto;
        aspect-ratio: ${aspectRatio};
        background-color: transparent;
        border-radius: 5px;

        top: -25px;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        overflow: hidden;

        background-color: white;
        border-radius: 5px;
      `}
    >
      {isPdf ? (
        <iframe
          src={finalPdfUrl}
          title="Document Viewer"
          width="100%"
          height="100%"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            border: none;

            background-color: white;
            display: block;
          `}
        >
          <p style={{ color: "white", padding: "20px", textAlign: "center" }}>
            Twoja przeglądarka nie wspiera podglądu PDF.
            <a href={currentSource} download style={{ color: "#00d4ff" }}>
              {" "}
              Pobierz plik
            </a>
            .
          </p>
        </iframe>
      ) : (
        <ReactPlayer
          controls={true}
          url={currentSource}
          loop={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
    </div>
  );
};

export default MediaViewer;
