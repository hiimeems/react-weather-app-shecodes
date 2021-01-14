import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleRequest(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let units = "metric";
    let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
    const apiKey = `6e655c51885a817c91e42c6e1aa56edf`;
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleRequest);
    // making API call with city
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // searching for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchCurrentLocation(position) {
    let units = "metric";
    let apiKey = "6e655c51885a817c91e42c6e1aa56edf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleRequest);
  }

  function myCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="search"
                placeholder="city search..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-3">
              <button className="search-button">
                <svg className="search-icon" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </button>
            </div>
            <div className="col-md-3">
              <input
                type="button"
                value="current"
                className="btn btn-info w-100"
                onClick={myCurrentLocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
