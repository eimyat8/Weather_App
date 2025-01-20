import React from "react";
import { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
// import { WiDayCloudy, WiRain } from "react-icons/wi";

function WCard({ data }) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center gap-1">
        <Clock value={value}></Clock>
        <h2>
          {data.name}, {data.sys.country}
        </h2>
        <h1>
          <img
            src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`}
            alt=""
          />{" "}
          {(data.main.temp - 273.15).toFixed(2)} °С
        </h1>
        <p>{data.weather[0].main}</p>
        <p> Humidity: {data.main.humidity} %</p>
        <p>Visibility: {data.visibility / 1000} km</p>
      </div>
    );
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
}

export default WCard;
