import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="text-lowercase">
        <span className="city-entered">{props.data.city}</span>
      </h1>
      <div className="row">
        <div className="col-4">
          <div className="clear-fix">
            <div className="temperature">
              <span className="float-left">
                {" "}
                {Math.round(props.data.temperature)}
              </span>
            </div>
            <div className="float-right">
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <WeatherIcon code={props.data.icon}  />
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
