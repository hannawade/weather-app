import React from "react";
import "../App.css";
import LocationAutocomplete from "./LocationAutocomplete.jsx";

//@material-ui components
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//Top navigation bar to display city and time

//TODO: Put inside a container
const Topbar = (props) => {
  //Handle change for meteric/imperial
  const handleUnitChange = (event) => props.unitsHandler(event.target.value);

  //Update parent state after city lookup
  const updateLocation = (lat, lon) => props.locationHandler(lat, lon);

  return (
    <div className="Topbar" id="Topbar">
      <LocationAutocomplete
        updateLocation={updateLocation}
      ></LocationAutocomplete>
      <div className="Unit-selector" id="Unit-selector">
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel>Units</InputLabel>
          <Select label="Units" defaultValue="" onChange={handleUnitChange}>
            <MenuItem value="imperial">Imperial</MenuItem>
            <MenuItem value="meteric">Metric</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default Topbar;
