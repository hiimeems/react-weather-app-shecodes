import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>korea</h1>
      <ul>
        <li>monday 7:00</li>
        <li>mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          ></img>
          <span className="temperature">4</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation: 11%</li>
            <li>wind: 2 km/h</li>
            <li>humidity: 13%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
