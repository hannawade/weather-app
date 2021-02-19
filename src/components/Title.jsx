import React from "react";
import "../App.css";
import moment from "moment";

//@material-ui components
import Grid from "@material-ui/core/Grid";
import WeatherIcon from "./WeatherIcon";

const Title = (props) => {
  return props.data.map((d) => (
    <div id="Title">
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div className="Title-location">
                Current Weather for {props.location}
              </div>
              <div className="Title-time">
                {moment().format("dddd, h:mm a")}
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <WeatherIcon icon={d.weather[0].icon} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  ));
};
export default Title;
