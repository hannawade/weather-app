import { Component } from "react";
import moment from "moment";
import "../App.css";
//@material-ui components
import Grid from "@material-ui/core/Grid";

//TODO: Handling for different timezones for sunset/sunrise
//TODO: Change miles to yards when visibility is lower

//Table to display details of current weather
class DetailsTable extends Component {
  //Format for Metric: Celsius, Imperial: Fahrenheit.
  formatTempUnit() {
    let tempUnit = "";
    if (this.props.units === "meteric") tempUnit = "°C";
    else if (this.props.units === "imperial") tempUnit = "°F";

    return tempUnit;
  }

  //Format for Metric: meter/sec, Imperial: miles/hour.
  formatWindSpeedUnit() {
    let speedUnit = "";
    if (this.props.units === "meteric") speedUnit = "m/s";
    else if (this.props.units === "imperial") speedUnit = "mph";

    return speedUnit;
  }

  //Format for Metric: meter, Imperial: mile.
  formatVisibility() {
    let visNum = 0;
    if (this.props.units === "meteric") visNum = this.props.visibility;
    else if (this.props.units === "imperial") {
      visNum = this.props.visibility * 0.0000621371192;
    }
    return visNum;
  }

  //Format for Metric: meter, Imperial: mile.
  formatVisibilityUnit() {
    let visUnit = "";
    if (this.props.units === "meteric") visUnit = "meters";
    else if (this.props.units === "imperial") visUnit = "miles";

    return visUnit;
  }

  render() {
    return (
      <div className="Details-Table" id="Details-Table">
        <Grid container>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>Description: {this.props.main}</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>
                Temperature: {this.props.temp}{" "}
                <sup>{this.formatTempUnit()}</sup>
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              Feels Like: {this.props.feels_like}{" "}
              <sup>{this.formatTempUnit()}</sup>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              Wind: {this.props.wind_speed}{" "}
              <sup>{this.formatWindSpeedUnit()}</sup>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>
                Low: {this.props.temp_min} <sup>{this.formatTempUnit()}</sup>
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>
                High: {this.props.temp_max} <sup>{this.formatTempUnit()}</sup>
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              Humidity: {this.props.humidity} %
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              Visibility: {this.formatVisibility()}{" "}
              {this.formatVisibilityUnit()}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>Sunrise: {moment.unix(this.props.sunrise).format("h:mm a")}</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Details-Table-Element">
              <p>Sunset: {moment.unix(this.props.sunset).format("hh:mm a")}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DetailsTable;
