import React from "react";
import ForecastIcons from "./ForecastIcons";
import ForecastFormattedDate from "./ForecastFormattedDate";

export default function ForecastDay(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°`;
  }
  function minTemp() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°`;
  }
  function ForecastDate() {
    let dateForecast = new Date(props.data.time * 1000);
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ];

    let dayOfWeek = week[dateForecast.getDay()];
    let month = monthName[dateForecast.getMonth()];
    let day = dateForecast.getDate();

    return (
      <div className="ForecastFormattedDate">
        <div>{dayOfWeek}</div>
        <div>
          {day} {month}{" "}
        </div>
      </div>
    );
  }
  return (
    <div className="ForecastDay">
      <div>{ForecastDate()}</div>

      <ForecastIcons code={props.data.condition.icon} />
      <div className="forecast-tempreatures">
        <span forecast-temperature-max>{maxTemp()}</span>
        {" / "}
        <span forecast-temperature-min>{minTemp()}</span>
      </div>
    </div>
  );
}
