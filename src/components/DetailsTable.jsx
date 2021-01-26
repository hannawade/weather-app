import { Component } from "react";
import moment from "moment";
//@material-ui components
import Grid from "@material-ui/core/Grid";

//TODO: Handling for different timezones for sunset/sunrise
//TODO: Look at humidity & visibility units of measurement
//TODO: Add icons for weather conditions

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

  render() {
    return (
      <div className="DetailsTable">
        <Grid container>
          <Grid item xs={6}>
            <p>Description: {this.props.main}</p>
          </Grid>
          <Grid item xs={6}>
            <p>
              Temperature: {this.props.temp} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              Feels Like: {this.props.feels_like}{" "}
              <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              Wind: {this.props.wind_speed}{" "}
              <sup>{this.formatWindSpeedUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              Low: {this.props.temp_min} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>
              High: {this.props.temp_max} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6}>
            <p>Humidity: {this.props.humidity}</p>
          </Grid>
          <Grid item xs={6}>
            <p>Visibility: {this.props.visibility}</p>
          </Grid>
          <Grid item xs={6}>
            <p>Sunrise: {moment.unix(this.props.sunrise).format("h:mm a")}</p>
          </Grid>
          <Grid item xs={6}>
            <p>Sunset: {moment.unix(this.props.sunset).format("hh:mm a")}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DetailsTable;
