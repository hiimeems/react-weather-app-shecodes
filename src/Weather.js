import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="enter city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="button" value="search" className="btn btn-success" />
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
          4°C
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
