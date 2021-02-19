import React from "react";
import "../App.css";

const WeatherIcon = (props) => {
  const getIconPath = () => {
    let path = "weather-icons/" + props.icon + ".png";
    return path;
  };

  return (
    <div className="Weather-icon" id="Weather-icon">
      <img src={getIconPath()} alt="weather icon"></img>
    </div>
  );
};
export default WeatherIcon;
