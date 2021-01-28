import React, { Component } from "react";
import "../App.css";

class WeatherIcon extends Component {
  getIconPath() {
    let path = "weather-icons/" + this.props.icon + ".png";
    return path;
  }

  render() {
    return (
      <div className="Weather-Icon-Wrapper">
        <div className="Weather-Icon" id="Weather-Icon">
          <img src={this.getIconPath()} alt="weather icon"></img>
        </div>
      </div>
    );
  }
}
export default WeatherIcon;
