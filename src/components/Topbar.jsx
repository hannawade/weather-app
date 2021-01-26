import React, { Component } from "react";
import moment from "moment";
import styles from "../App.css";

//@material-ui components
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

//@material-ui icons
import SearchIcon from "@material-ui/icons/Search";

//Top navigation bar to display city and time
//TODO: Add spell check city names so it doesnt break during calls

class Topbar extends Component {
  state = {
    city: "",
  };

  //Handle change for meteric/imperial
  handleUnitChange = (event) => {
    this.props.unitsHandler(event.target.value);
  };

  //Handle manual city lookup
  handleLocationChange = (event) => {
    this.setState({ city: event.target.value });
  };

  //Update parent state after city lookup
  updateLocation = () => {
    this.props.locationHandler(this.state.city);
  };

  render() {
    return (
      <nav className="topbar">
        <FormControl style={styles.Center}>
          <Input
            id="outlined-basic"
            variant="outlined"
            label="City"
            placeholder="City name"
            onChange={this.handleLocationChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          ></Input>
          <Button
            type="submit"
            variant="outlined"
            onClick={this.updateLocation}
          >
            Search City
          </Button>
        </FormControl>

        <FormControl
          variant="outlined"
          style={{ float: "right", minWidth: 120 }}
        >
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
        <h2>
          Current Weather for {this.props.location} {moment().format("h:mm a")}
        </h2>
      </nav>
    );
  }
}

export default Topbar;
