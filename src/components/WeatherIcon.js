import React from "react";
import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiDayCloudy,
  WiDayRain,
  WiDayLightning,
  WiDaySnow,
  WiDayFog,
} from "react-icons/wi";

const WeatherIcon = ({ weatherType }) => {
  switch (weatherType) {
    case "clear sky":
      return <WiDaySunny />;
    case "few clouds":
      return <WiDayCloudy />;
    case "scattered clouds":
      return <WiDayCloudy />;
    case "broken clouds":
      return <WiDayCloudy />;
    case "shower rain":
      return <WiDayRain />;
    case "rain":
      return <WiDayRain />;
    case "thunderstorm":
      return <WiDayLightning />;
    case "snow":
      return <WiDaySnow />;
    case "mist":
      return <WiDayFog />;

    default:
      break;
  }
};

WeatherIcon.propTypes = {
  weatherType: PropTypes.string,
};

export default WeatherIcon;
