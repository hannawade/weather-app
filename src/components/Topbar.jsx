import React, { Component } from "react";
import "../App.css";
import LocationAutocomplete from "./LocationAutocomplete.jsx";

//@material-ui components
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//Top navigation bar to display city and time

//TODO: Put inside a container
class Topbar extends Component {
  constructor(props) {
    super(props);
    this.updateLocation = this.updateLocation.bind(this);
  }

  state = {
    city: "",
  };

  //Handle change for meteric/imperial
  handleUnitChange = (event) => {
    this.props.unitsHandler(event.target.value);
  };

  //Update parent state after city lookup
  updateLocation(lat, lon) {
    this.props.locationHandler(lat, lon);
  }

  render() {
    return (
      <div className="Topbar" id="Topbar">
        <LocationAutocomplete
          updateLocation={this.updateLocation}
        ></LocationAutocomplete>
        <div className="Unit-selector" id="Unit-selector">
          <FormControl variant="outlined" style={{ minWidth: 120 }}>
            <InputLabel>Units</InputLabel>
            <Select
              label="Units"
              defaultValue=""
              onChange={this.handleUnitChange}
            >
              <MenuItem value="imperial">Imperial</MenuItem>
              <MenuItem value="meteric">Metric</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Topbar;
