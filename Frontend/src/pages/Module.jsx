import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Module = ({ mode }) => {
  return (
    <div className="module-container">
      <div
        className={`module-content-wrapper ${
          mode === true
            ? "bg-[#ffffff] text-[#0f0f0f]"
            : "bg-[#0f0f0f] text-[#ffffff]"
        }`}
      >
        <nav className="navigation flex items-center justify-between w-full border-b-2">
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
          <img
            src="/images/man.png"
            alt=""
            width="50px"
            className="mr-[45px]"
          />
        </nav>
        <div className="inner-container">
          <hr />
          <span
            className={`${mode === true ? "bg-[#2a2a2a]" : "bg-[#cccccc]"}`}
          >
            <FaArrowUpLong
              className={`text-4xl ${
                mode === true ? "text-[#cccccc]" : "text-[#2a2a2a]"
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Module;
