import React, { Component } from "react";
import "../App.css";
import moment from "moment";

//@material-ui components
import Container from "@material-ui/core/Container";
import WeatherIcon from "./WeatherIcon";

class Title extends Component {
  render() {
    return this.props.data.map((d) => (
      <div className="Title" id="Title">
        <div className="Title-wrapper">
          <Container>
            <div className="Title-location">
              Current Weather for {this.props.location}
            </div>
            <WeatherIcon icon={d.weather[0].icon} />
            <div className="Title-time">{moment().format("dddd, h:mm a")}</div>
          </Container>
        </div>
      </div>
    ));
  }
}
export default Title;
