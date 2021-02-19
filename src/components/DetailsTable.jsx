import moment from "moment";
import "../App.css";
//@material-ui components
import Grid from "@material-ui/core/Grid";

//TODO: Change miles to yards when visibility is lower
//BUG: Celsius not converted right for metric temp

//Table to display details of current weather
const DetailsTable = (props) => {
  //Format for Metric: Celsius, Imperial: Fahrenheit.
  const formatTempUnit = () => (props.units === "meteric" ? "°C" : "°F");

  //Format for Metric: meter/sec, Imperial: miles/hour.
  const formatWindSpeedUnit = () => (props.units === "meteric" ? "m/s" : "mph");

  //Format for Metric: meter, Imperial: mile.
  const formatVisibility = (visibility) =>
    props.units === "meteric" ? visibility : visibility * 0.0000621371192;

  //Format for Metric: meter, Imperial: mile.
  const formatVisibilityUnit = () =>
    props.units === "meteric" ? "meters" : "miles";

  return props.data.map((d) => (
    <div className="Details-table" id="Details-table">
      <Grid container>
        <Grid item xs={6}>
          <p>Description: {d.weather[0].main}</p>
        </Grid>
        <Grid item xs={6}>
          <p>
            Temperature: {d.main.temp} <sup>{formatTempUnit}</sup>
          </p>
        </Grid>
        <Grid item xs={6}>
          Feels Like: {d.main.feels_like} <sup>{formatTempUnit}</sup>
        </Grid>
        <Grid item xs={6}>
          Wind: {d.wind.speed} <sup>{formatWindSpeedUnit}</sup>
        </Grid>
        <Grid item xs={6}>
          <p>
            Low: {d.main.temp_min} <sup>{formatTempUnit}</sup>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            High: {d.main.temp_max} <sup>{formatTempUnit}</sup>
          </p>
        </Grid>
        <Grid item xs={6}>
          Humidity: {d.main.humidity} %
        </Grid>
        <Grid item xs={6}>
          Visibility: {formatVisibility(d.visibility)} {formatVisibilityUnit}
        </Grid>
        <Grid item xs={6}>
          <p>Sunrise: {moment.unix(d.sys.sunrise).format("h:mm a")}</p>
        </Grid>
        <Grid item xs={6}>
          <p>Sunset: {moment.unix(d.sys.sunset).format("h:mm a")}</p>
        </Grid>
      </Grid>
    </div>
  ));
};
export default DetailsTable;
