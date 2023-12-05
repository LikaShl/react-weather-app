import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function forecastIcons(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "hail",
    "shower-rain-night": "hail",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightning",
    "thunderstorm-night": "lightning",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
  };

  return <WeatherSvg state={codeMapping[props.code]} />;
}
