import React from "react";
import FormattedDate from "./FotmattedDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div>
        <h1 className="text-capitalize">{props.data.city}</h1>
      </div>
      <div className="row clearfix">
        <div className="col-4 time-descr-block">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-4 d-flex">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <div className="WeatherTemperature d-flex">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-4 humidity-wind-block">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
