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
            <div className="col-6">
              <input
                type="search"
                placeholder="city search..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-6">
              <input
                type="button"
                value="enter"
                className="btn btn-primary w-50"
              />
              <input
                type="button"
                value="here"
                className="btn btn-info w-50"
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
