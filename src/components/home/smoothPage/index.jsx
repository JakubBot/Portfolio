import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

import "./index.scss";

const SmoothPage = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1200) return;
    var html = document.documentElement;
    var body = document.body;

    var scroller = {
      target: document.querySelector("#scroll-container"),
      ease: 0.05,
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    var requestId = null;

    gsap.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    }

    // Initialize after DOM is ready
    requestAnimationFrame(() => {
      onLoad();
    });

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      gsap.set(scroller.target, {
        y: -scroller.y,
      });

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      body.style.height = "";
    };
  }, [location.pathname]);

  return (
    <>
      {window.innerWidth >= 1200 ? (
        <div className="viewport">
          <div id="scroll-container" className="scroll-container">
            {children}
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default SmoothPage;
