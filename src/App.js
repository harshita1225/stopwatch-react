import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function reset() {
    setTime(0);
    setIsActive(false);
  }
  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 1);
    } else if (!isActive) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  //converting numver to time format
  const addZero = (n) => {
    return n < 10 ? "0" + n : n;
  };

  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const hundredths = (time / 10) % 100;

  return (
    <div className="App">
      <div className="container">
        <h1>STOP WATCH </h1>
        <div className="watch-conatiner">
          <div className="inner-container">
            <div className="time">
              {addZero(minutes)}:{addZero(seconds)}:{addZero(hundredths)}
            </div>

            <div className="buttons">
              <button
                onClick={() => {
                  setIsActive(true);
                }}
              >
                START
              </button>
              <button
                onClick={() => {
                  setIsActive(false);
                }}
              >
                STOP
              </button>
              <button onClick={reset}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
