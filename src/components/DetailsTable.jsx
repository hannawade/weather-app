import { Component } from "react";
import moment from "moment";
import "../App.css";
//@material-ui components
import Grid from "@material-ui/core/Grid";

//TODO: Change miles to yards when visibility is lower

//Table to display details of current weather
class DetailsTable extends Component {
  //Format for Metric: Celsius, Imperial: Fahrenheit.
  formatTempUnit() {
    if (this.props.units === "meteric") return "°C";
    else if (this.props.units === "imperial") return "°F";
  }

  //Format for Metric: meter/sec, Imperial: miles/hour.
  formatWindSpeedUnit() {
    if (this.props.units === "meteric") return "m/s";
    else if (this.props.units === "imperial") return "mph";
  }

  //Format for Metric: meter, Imperial: mile.
  formatVisibility(visibility) {
    if (this.props.units === "meteric") return visibility;
    else if (this.props.units === "imperial") {
      return visibility * 0.0000621371192;
    }
  }

  //Format for Metric: meter, Imperial: mile.
  formatVisibilityUnit() {
    if (this.props.units === "meteric") return "meters";
    else if (this.props.units === "imperial") return "miles";
  }

  render() {
    return this.props.data.map((d) => (
      <div className="Details-Table" id="Details-Table">
        <Grid container>
          <Grid item xs={6} className="Details-Table-Element">
            <p>Description: {d.weather[0].main}</p>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            <p>
              Temperature: {d.main.temp} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            Feels Like: {d.main.feels_like} <sup>{this.formatTempUnit()}</sup>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            Wind: {d.wind.speed} <sup>{this.formatWindSpeedUnit()}</sup>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            <p>
              Low: {d.main.temp_min} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            <p>
              High: {d.main.temp_max} <sup>{this.formatTempUnit()}</sup>
            </p>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            Humidity: {d.main.humidity} %
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            Visibility: {this.formatVisibility(d.visibility)}{" "}
            {this.formatVisibilityUnit()}
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            <p>Sunrise: {moment.unix(d.sys.sunrise).format("h:mm a")}</p>
          </Grid>
          <Grid item xs={6} className="Details-Table-Element">
            <p>Sunset: {moment.unix(d.sys.sunset).format("hh:mm a")}</p>
          </Grid>
        </Grid>
      </div>
    ));
  }
}

export default DetailsTable;
