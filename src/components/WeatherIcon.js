import React from "react";
import PropTypes from "prop-types";

const WeatherIcon = ({ weatherType }) => {
  switch (weatherType) {
    case "clear sky":
      break;
    case "few clouds":
      break;
    case "scattered clouds":
      break;
    case "broken clouds":
      break;
    case "shower rain":
      break;
    case "rain":
      break;
    case "thunderstorm":
      break;
    case "snow":
      break;
    case "mist":
      break;

    default:
      break;
  }
};

WeatherIcon.propTypes = {
  weatherType: PropTypes.string,
};

export default WeatherIcon;
