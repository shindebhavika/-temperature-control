// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(10);

  useEffect(() => {
    document.body.style.backgroundImage =
      temperature <= 14
        ? 'url("https://thumbs.dreamstime.com/b/perfect-sunny-day-6010719.jpg")'
        : 'url("https://static6.depositphotos.com/1009676/560/v/450/depositphotos_5604235-stock-illustration-green-field-and-sunrise-sky.jpg")';

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [temperature]);

  const increaseTemperature = () => {
    if (temperature < 30) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemperature = () => {
    if (temperature > 0) {
      setTemperature(temperature - 1);
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="temperature-display-container">
          <div
            className={`temperature-display ${
              temperature <= 14 ? "cold" : "hot"
            }`}
          >
            {temperature}°C
          </div>
        </div>
        <div className="button-container">
          <button onClick={increaseTemperature}>+</button>
          <button onClick={decreaseTemperature}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
