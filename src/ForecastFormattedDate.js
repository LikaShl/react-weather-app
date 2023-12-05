import React from "react";

export default function ForecastFormattedDate(props) {
  let date = new Date(props.forecastDate);
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  let dayOfWeek = week[date.getDay()];
  let month = monthName[date.getMonth()];
  let day = date.getDate();
}
