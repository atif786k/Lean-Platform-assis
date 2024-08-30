import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import "./style/style.css";

const BlobAnimation = () => {
  useEffect(() => {
    const timeLine = gsap.timeline({ repeat: -1 });
    timeLine.to([".blob-one", ".blob-two"], {
      x: (index) => (index === 0 ? "80vw" : "-80vw"),
      duration: 3,
      ease: Power1.easeInOut,
      delay: 1.5,
    });

    timeLine.to([".blob-one", ".blob-two"], {
      y: (index) => (index === 0 ? "60vh" : "-60vh"),
      duration: 3,
      ease: Power1.easeInOut,
      delay: 1.5,
    });

    timeLine.to([".blob-one", ".blob-two"], {
      x: (index) => (index === 0 ? 0 : 0),
      duration: 3,
      ease: Power1.easeInOut,
      delay: 1.5,
    });

    timeLine.to([".blob-one", ".blob-two"], {
      y: (index) => (index === 0 ? 0 : 0),
      duration: 3,
      ease: Power1.easeInOut,
      delay: 1.5,
    });
  }, []);

  return (
    <div className="blob-container">
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>
    </div>
  );
};

export default BlobAnimation;
