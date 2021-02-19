import React from "react";
import "../App.css";
import LocationAutocomplete from "./LocationAutocomplete.jsx";

//@material-ui components
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//TODO: Give consistant styling to search bar and dropdown

//Top navigation bar to display city and time
const Topbar = (props) => {
  //Handle change for meteric/imperial
  const handleUnitChange = (event) => props.unitsHandler(event.target.value);

  //Update parent state after city lookup
  const updateLocation = (lat, lon) => props.locationHandler(lat, lon);

  return (
    <div className="Topbar" id="Topbar">
      <Grid container spacing={2}>
        <Grid item xs>
          <LocationAutocomplete
            updateLocation={updateLocation}
          ></LocationAutocomplete>
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="outlined" fullWidth="true">
            <InputLabel>Units</InputLabel>
            <Select
              label="Units"
              defaultValue="imperial"
              onChange={handleUnitChange}
            >
              <MenuItem value="imperial">Imperial</MenuItem>
              <MenuItem value="meteric">Metric</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Topbar;
