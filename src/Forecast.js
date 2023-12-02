import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2 forecast-one-day">
          <div forecast-day>Sat</div> <div forecast-date>2/12</div>
          <WeatherIcon code={"01d"} />
          <div className="forecast-tempreatures">
            <span forecast-temperature-max>5</span>{" "}
            <span forecast-temperature-min>-3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
