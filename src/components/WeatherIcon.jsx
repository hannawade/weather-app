import React, { Component } from "react";
import "../App.css";

class WeatherIcon extends Component {
  getIconPath() {
    let path = "weather-icons/" + this.props.icon + ".png";
    return path;
  }

  render() {
    return (
      <div className="Weather-icon" id="Weather-icon">
        <img src={this.getIconPath()} alt="weather icon"></img>
      </div>
    );
  }
}
export default WeatherIcon;
