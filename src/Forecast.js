import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2 forecast-one-day">
            <div forecast-day>Sat</div> <div forecast-date>2/12</div>
            <WeatherIcon code={"01d"} />
            <div className="forecast-tempreatures">
              <span forecast-temperature-max>{forecastData[0].temp.max}</span>{" "}
              <span forecast-temperature-min>{forecastData[0].temp.min}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={6}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
