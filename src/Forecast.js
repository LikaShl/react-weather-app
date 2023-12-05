import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const key = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (forecastDay, index) {
            if (index < 6) {
              return (
                <div className="col-2 forecast-one-day">
                  <ForecastDay data={forecastDay} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
