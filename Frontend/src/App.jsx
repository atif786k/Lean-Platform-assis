import { useState } from "react";
import "./App.css";
import Launch from "./pages/Launch";
import LaunchCard from "./pages/LaunchCard";
import Module from "./pages/Module";
import BlobAnimation from "./components/BlobAnimation";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { GrKeyboard } from "react-icons/gr";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimerInput from "./components/TimerInput";

function App() {
  const [mode, setMode] = useState(false);
  const [timerInputCard, setTimerInputCard] = useState(false);
  const [saveTimer, setSaveTimer] = useState(null);
  const toggleMode = () => {
    setMode(!mode);
  };
  const toggleCard = () => {
    setTimerInputCard(!false);
  };
  const set = (timer) => {
    console.log("Setting timer value:", timer); // Add this line
    setSaveTimer(timer);
    setTimerInputCard(false);
  };

  return (
    <>
      <div className={`app-container ${mode ? "light-theme" : "dark-theme"}`}>
        <BlobAnimation />
        <div className="buttons space-x-4 absolute right-10 top-[28px] lg:top-[40px] z-50">
          <button onClick={toggleCard} className="cursor-pointer">
            <GrKeyboard className="text-xl lg:text-3xl" />
          </button>
          <button onClick={toggleMode} className="cursor-pointer">
            {mode ? (
              <MdNightlight className="-rotate-45 text-xl lg:text-3xl" />
            ) : (
              <MdLightMode className="text-xl lg:text-3xl" />
            )}
          </button>
        </div>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Launch
                  timerValue={saveTimer}
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
            <Route
              exact
              path="/card"
              element={<LaunchCard mode={mode} />}
            ></Route>
            <Route exact path="/module" element={<Module />}></Route>
          </Routes>
        </Router>
        {timerInputCard && (
          <TimerInput
            setFunction={set}
            onCancel={() => setTimerInputCard(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
