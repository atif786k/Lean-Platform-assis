import React, { useEffect, useRef } from "react";
import "./style/style.css";
import BlobAnimation from "../components/BlobAnimation";
import { gsap } from "gsap";
import { useNavigate, Link } from "react-router-dom";

const LaunchCard = ({ mode }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.25 },
      { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );

    const timeout = setTimeout(() => {
      navigate("/module");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div className="launch-container">
      <BlobAnimation />
      <div className="content-wrapper">
        <img
          className="absolute z-10"
          src="https://s3-alpha-sig.figma.com/img/f338/33fc/e5ea7a96e826e3a258e6eafb23ad03b8?Expires=1725840000&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=PdngFnikJq2UqQa4f~kezW-uSewU7goyXVlYVI-3KlwUCoXh-tXxzIL4Kms6qjU1tkV-YXV6kglnWB~MpCT~wy86tFCwAl2rs18a6JyiMIasSonRxwNkkghAMTXec--4vkXA4hrvC~SempQeAq62ly2tDkETdDbV9cu-ONZ26TUQa0Jndf43LEu-so0ESLA0jZHTI~6p0jFtYvuMdIDfEo0YvORT0VqfmrGyaKtItu9ruO20vYC4fUi5Cicqx1UJyY3YfbQs-Rsjy9EOatfn-P3lYkMS8F17iKDdp7rRzfBp91GVbxHW~0BPHipkilK~ir7kEldC5dneLtouOmg8vw__"
          width="358"
          height="776"
        />
        <nav className="navigation">
          <h2 className="nav-heading">
            The{" "}
            <span
              className={`${
                mode === true
                  ? "bg-[#0f0f0f] text-[#ffffff]"
                  : "bg-[#ffffff] text-[#0f0f0f]"
              }`}
            >
              Product
            </span>{" "}
            Platform
          </h2>
        </nav>
        <div
          ref={cardRef}
          className={`launch-card space-y-[72px] ${
            mode === true ? "bg-light-gradient" : "bg-dark-gradient"
          }`}
        >
          <div className="space-y-6">
            <h2 className="card-title">We are Live Now!</h2>
            <p
              className={`card-para ${
                mode === true ? "text-[#4f4f4f]" : "text-[#cccccc]"
              }`}
            >
              Our new feature is now{" "}
              <span
                className={`${
                  mode === true ? "text-[#0f0f0f]" : "text-[#ffffff]"
                }`}
              >
                Live and ready{" "}
              </span>{" "}
              for you to explore. Go ahead and give it a try
            </p>
          </div>
          <button
            className={`started-btn ${
              mode === true
                ? "bg-[#0f0f0f] text-[#ffffff]"
                : "bg-[#ffffff] text-[#0f0f0f]"
            }`}
          >
            <Link to="/module">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
