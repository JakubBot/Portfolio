import React from "react";
import Logo from "./Logo";
import { useHistory, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect, useCallback } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const router = useHistory();
  const location = useLocation();
  const pathname = location.pathname;

  const overlayRef = useRef(null);
  const logoOverlayRef = useRef(null);
  const logoRef = useRef(null);
  const blocksRef = useRef([]);
  const isTransitioning = useRef(false);
  const isInitialMount = useRef(true);

  const coverPage = useCallback(
    (url) => {
      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
      })
        .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
        .set(
          logoRef.current.querySelector("path"),
          {
            strokeDashoffset: logoRef.current
              .querySelector("path")
              .getTotalLength(),
            fill: "transparent",
          },
          "-=0.25",
        )
        .to(
          logoRef.current.querySelector("path"),
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
          },
          "-=0.5",
        )
        .to(
          logoRef.current.querySelector("path"),
          {
            fill: "#e3e4d8",
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(logoOverlayRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        });
    },
    [router],
  );

  const revealPage = useCallback(() => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;

        window.scrollTo(0, 0);
      },
    });
  }, []);

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();

    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

    if (logoRef.current) {
      const path = logoRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      }
    }

    const handleRouteChange = (url) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll(".projects__images__link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const linkPathname = new URL(
          e.currentTarget.href,
          window.location.origin,
        ).pathname;
        const basename = process.env.PUBLIC_URL || "";
        const url = linkPathname.replace(basename, "") || "/";

        if (url !== pathname) {
          handleRouteChange(url);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleRouteChange);
      });
    };
  }, [coverPage, pathname]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    revealPage();
  }, [pathname, revealPage]);

  return (
    <>
      <div className="transition-overlay" ref={overlayRef}></div>
      <div className="logo-overlay" ref={logoOverlayRef}>
        <div className="logo-container">
          <Logo ref={logoRef} />
        </div>
      </div>

      {children}
    </>
  );
};

export default PageTransition;
