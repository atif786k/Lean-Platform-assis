import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ timerValue, mode }) => {
  const [totalSeconds, setTotalSeconds] = useState(timerValue);
  const [displayTime, setDisplayTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (totalSeconds > 0) {
      const timerInterval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    } else {
      navigate("/card");
    }
  }, [totalSeconds, navigate]);

  useEffect(() => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    setDisplayTime({ hours, minutes, seconds });
  }, [totalSeconds]);

  return (
    <div
      className={`timer-container ${
        displayTime.hours > 0
          ? "w-[323px] lg:w-[672px]"
          : "w-[220px] lg:w-[434px]"
      } ${mode === true ? "bg-light-gradient" : "bg-dark-gradient"}`}
    >
      {displayTime.hours > 0 && (
        <>
          <div className="text-center space-y-4">
            <div className="timer-digits">{displayTime.hours}</div>
            <div className="time-english">Hours</div>
          </div>
          <div className="digit-separater">:</div>
        </>
      )}

      {displayTime.hours > 0 || displayTime.minutes > 0 ? (
        <>
          <div className="text-center space-y-4">
            <div className="timer-digits">
              {displayTime.minutes ? displayTime.minutes : "00"}
            </div>
            <div className="time-english">Minutes</div>
          </div>
        </>
      ) : (
        <div className="text-center space-y-4">
          <div className="timer-digits">00</div>
          <div className="time-english">Minutes</div>
        </div>
      )}

      <div className="digit-separater">:</div>

      <div className="text-center space-y-4">
        <div className="timer-digits">{displayTime.seconds}</div>
        <div className="time-english">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
