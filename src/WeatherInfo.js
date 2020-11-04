import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="text-lowercase">
        <span className="city-entered">{props.data.city}</span>
      </h1>
      <div className="row">
        <div className="col-4">
          <span className="temperature">
            {" "}
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-4">
          <img src={props.data.iconUrl} alt={props.data.description}></img>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
            <li>wind: {props.data.wind} km/h</li>
            <li>humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
