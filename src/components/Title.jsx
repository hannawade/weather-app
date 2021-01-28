import React, { Component } from "react";
import "../App.css";
import moment from "moment";

//@material-ui components
import Container from "@material-ui/core/Container";

class Title extends Component {
  render() {
    return (
      <div className="Title" id="Title">
        <div className="Title-wrapper">
          <Container>
            <div className="Title-Location">
              Current Weather for {this.props.location}
            </div>
            <div className="Title-Time">{moment().format("dddd, h:mm a")}</div>
          </Container>
        </div>
      </div>
    );
  }
}
export default Title;
