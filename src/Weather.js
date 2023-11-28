import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let apiKey = "b40b135798f82a05aed08769f9275f50";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}`;
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Stuttgart</h1>
      <ul>
        <li>Monday 11.25</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          />
          <span className="temperature">4</span>{" "}
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 80%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
