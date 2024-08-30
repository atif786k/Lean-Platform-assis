import React, { useState } from "react";
import "./style/style.css"
import { RiCloseLargeFill } from "react-icons/ri";

const TimerInput = ({ setFunction, onCancel }) => {
  const [timer, setTimer] = useState("");

  const handleSave = () => {
    const parsedValue = parseInt(timer, 10);
    if (!isNaN(parsedValue)) {
      setFunction(parsedValue);
    }
  };
  return (
    <div className="popup">
      <div className="timer-input-container space-y-4 lg:space-y-10">
        <h1 className="popup-heading">
          Enter the value of timer in seconds to view the working of timer
          componets
        </h1>
        <span onClick={onCancel} className="close-btn cursor-pointer">
          <RiCloseLargeFill />
        </span>
        <input
          type="number"
          className="input-timer"
          placeholder="Enter the time for the timer in seconds"
          value={timer}
          onChange={(event) => setTimer(event.target.value)}
        />
        <br />
        <button onClick={handleSave} className="set-timer-btn">Set</button>
      </div>
    </div>
  );
};

export default TimerInput;
