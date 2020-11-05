import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CityTemperature from "./CityTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="text-lowercase">
        <span className="city-entered">{props.data.city}</span>
      </h1>
      <div className="clear-fix">
        <div className="row">
          <div className="col-4">
            <CityTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4">
            <WeatherIcon code={props.data.icon} />
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
    </div>
  );
}
