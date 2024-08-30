import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Module = () => {
  return (
    <div className="module-container">
      <div className="module-content-wrapper">
        <nav className="navigation flex items-center justify-between">
          <h2 className="nav-heading">
            The <span className="bg-[#ffffff] text-[#0f0f0f]">Product</span>{" "}
            Platform
          </h2>
          <img
            src="/images/man.png"
            alt=""
            width="50px"
            className="mr-[45px]"
          />
        </nav>
        <div className="inner-container">
          <span className="hidden bg-[#2a2a2a]">
            <FaArrowUpLong className="text-4xl text-[#cccccc]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Module;
