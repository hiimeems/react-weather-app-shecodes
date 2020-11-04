import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleRequest(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="city search..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="button"
                value="enter"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <h1>
          <span className="city-entered">{weatherData.city}</span>
        </h1>
        <div className="row">
          <div className="col-4">
            <span className="temperature">
              {" "}
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-4">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
          </div>
          <div className="col-4">
            <ul>
              <li>monday 7:00</li>
              <li>{weatherData.description}</li>
              <li>precipitation: 11%</li>
              <li>wind: {weatherData.wind} km/h</li>
              <li>humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let city = "korea";
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
    const apiKey = `6e655c51885a817c91e42c6e1aa56edf`;
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleRequest);

    return "Loading...";
  }
}
