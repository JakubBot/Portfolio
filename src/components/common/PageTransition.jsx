import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect, useCallback } from "react";
import gsap from "gsap";
import { css } from "@emotion/react";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  display: flex;
  pointer-events: none;
  z-index: 2;
`;

const blockStyle = css`
  flex: 1;
  height: 100%;
  background-color: #222;
  transform: scaleX(0);
  transform-origin: left;

  will-change: transform;
`;

const PageTransition = ({ children }) => {
  const router = useHistory();
  const location = useLocation();
  const pathname = location.pathname;

  const overlayRef = useRef(null);

  const blocksRef = useRef([]);
  const isTransitioning = useRef(false);
  const isInitialMount = useRef(true);

  const addToRefs = (el, index) => {
    blocksRef.current[index] = el;
  };

  const coverPage = useCallback(
    (url) => {
      document.body.style.overflow = "hidden"; // prevent scrolling during transition

      const tl = gsap.timeline({
        onComplete: () => {
          window.scrollTo(0, 0);
          router.push(url);
        },
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
      });
    },
    [router],
  );

  const revealPage = useCallback(() => {
    document.body.style.overflow = "hidden"; // prevent scrolling during transition

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;

        document.body.style.overflow = ""; // re-enable scrolling after transition

        ScrollTrigger.refresh();
      },
    });
  }, []);

  useLayoutEffect(() => {
    if (isInitialMount.current) {
      gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });
    }

    const handleRouteChange = (url) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const handleClick = (e) => {
      e.preventDefault();

      const linkPathname = new URL(e.currentTarget.href, window.location.origin)
        .pathname;
      const basename = process.env.PUBLIC_URL || "";
      const url = linkPathname.replace(basename, "") || "/";

      if (url !== pathname) {
        handleRouteChange(url);
      }
    };

    const links = document.querySelectorAll(".page_transition_link");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [coverPage, pathname]);

  useLayoutEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    revealPage();
  }, [pathname, revealPage]);

  const blocks = new Array(20).fill(null);

  return (
    <>
      <div css={overlayStyle} ref={overlayRef}>
        {blocks.map((_, index) => (
          <div
            key={index}
            css={blockStyle}
            ref={(el) => addToRefs(el, index)}
          />
        ))}
      </div>

      {children}
    </>
  );
};

export default PageTransition;
