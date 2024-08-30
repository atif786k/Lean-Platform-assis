import React, { useEffect, useState } from "react";
import "./style/style.css";
import Timer from "../components/Timer";
import BlobAnimation from "../components/BlobAnimation";

const Launch = ({ timerValue, mode }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailNotified, setIsEmailNotified] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setIsButtonDisabled(false);
      setIsEmailValid(true);
      setErrorMsg("");
    } else {
      setIsButtonDisabled(true);
      setIsEmailValid(false);
      setErrorMsg("Invalid email");
    }

    if (isEmailNotified) {
      setIsEmailNotified(false);
      setIsButtonDisabled(true);
    }
  };

  const handleNotifyClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (validateEmail(email)) {
        setIsEmailNotified(true);
        setErrorMsg(
          "Your email is already in our notify list. Try with another email"
        );
      } else {
        setErrorMsg("Invalid email");
      }
    }, 2000);
  };

  return (
    <div className={`launch-container ${mode ? "light-theme" : "dark-theme"}`}>
      <BlobAnimation />
      <div className="content-wrapper">
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
        <main
          className={`launch-main ${
            timerValue ? "space-y-8" : "space-y-[72px]"
          }`}
        >
          <div className="main-content space-y-6">
            <div className="main-content-title">
              {mode === true ? (
                <img src="/src/assets/darkrocket.svg" alt="Rocket SVG" />
              ) : (
                <img
                  id="rocket1"
                  src="/src/assets/rocket.svg"
                  alt="Rocket SVG"
                />
              )}
              <h1 className="main-content-heading">
                Launching New Module Soon!
              </h1>
            </div>
            <p
              className={`main-content-para ${
                mode === true ? "text-[#4f4f4f]" : "text-[#cccccc]"
              }`}
            >
              Exciting things are in the works! We're currently{" "}
              <span
                className={`${
                  mode === true ? "text-[#0f0f0f]" : "text-[#ffffff]"
                }`}
              >
                Crafting a new feature{" "}
              </span>
              for you. Keep an eye out for updates – We're working to make it
              available soon!
            </p>
          </div>
          <h2 className="glowing-text">
            {mode === true ? (
              <img src="/src/assets/darkreveal.svg" alt="Reveal SVG" />
            ) : (
              <img src="/src/assets/reveal.svg" alt="Reveal SVG" />
            )}
          </h2>

          {timerValue && <Timer timerValue={timerValue} mode={mode} />}
          <div className="notification-section space-y-6">
            <h4
              className={`notification-title ${
                mode === true ? "text-[#0f0f0f]" : "text-[#cccccc]"
              }`}
            >
              Be the first to know! Share your email and We'll notify you when
              it's live
            </h4>
            <div className="email-box relative flex items-center justify-center space-x-[14px]">
              <input
                type="email"
                name="email"
                id="mail"
                value={email}
                onChange={handleEmailChange}
                placeholder="Please enter yout email id"
                className={`input-email ${
                  mode === true
                    ? "text-[#0f0f0f] border-[#0f0f0f]"
                    : "text-[#cccccc] border-[#cccccc]"
                }`}
              />
              <button
                disabled={isButtonDisabled || isLoading}
                onClick={handleNotifyClick}
                className={`notify-btn ${
                  mode === true
                    ? "bg-[#0f0f0f] text-[#ffffff]"
                    : "bg-[#ffffff] text-[#0f0f0f]"
                }`}
              >
                {isLoading ? (
                  <img src="/images/91.gif" alt="" width="28px" />
                ) : isEmailNotified ? (
                  mode === true ? (
                    <svg
                      width="40"
                      height="32"
                      viewBox="0 0 40 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 20L12 29.5L38 2"
                        stroke="white"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="41"
                      height="33"
                      viewBox="0 0 41 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 21L12 30.5L38 3"
                        stroke="#0F0F0F"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )
                ) : (
                  "Notify Me"
                )}
              </button>
              {!isEmailValid && (
                <h4 className="absolute -bottom-8 left-24 text-xl text-[#FD443A] font-medium ">
                  {errorMsg}
                </h4>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Launch;
