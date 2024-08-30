import { useState } from "react";
import "./App.css";
import Launch from "./pages/Launch";
import LaunchCard from "./pages/LaunchCard";
import Module from "./pages/Module";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <>
      <div className={`app-container ${mode ? "light-theme" : "dark-theme"}`}>
        <button
          onClick={toggleMode}
          className="absolute right-10 top-[40px] cursor-pointer z-50">
          {mode ? (
            <MdNightlight className="text-3xl" />
          ) : (
            <MdLightMode className="text-3xl" />
          )}
        </button>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Launch timerValue="" mode={mode} toggleMode={toggleMode} />
              }
            ></Route>
            <Route
              exact
              path="/card"
              element={<LaunchCard mode={mode} />}
            ></Route>
            <Route
              exact
              path="/module"
              element={<Module mode={mode} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
