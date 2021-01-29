import React, { Component } from "react";
import "../App.css";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

//@material-ui icons
import SearchIcon from "@material-ui/icons/Search";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";

//@material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import ListItem from "@material-ui/core/ListItem";

class LocationAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }

  handleChange = (location) => {
    this.setState({ location });
  };

  handleSelect = (location) => {
    geocodeByAddress(location)
      .then((results) =>
        this.setCoords(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        )
      )
      .catch((error) => console.error("Error", error));
  };

  setCoords(lat, lon) {
    this.props.updateLocation(lat, lon);
  }

  setActive(suggestion) {
    let backgroundColor = "ffffff";
    suggestion.active
      ? (backgroundColor = "#fafafa")
      : (backgroundColor = "#ffffff");

    return backgroundColor;
  }

  render() {
    return (
      <div id="Location-Autocomplete">
        <PlacesAutocomplete
          value={this.state.location}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="Topbar-Search">
              <Input
                disableUnderline="true"
                {...getInputProps({
                  placeholder: "Search location...",
                  className: "location-search-input",
                })}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  return (
                    <div {...getSuggestionItemProps(suggestion)}>
                      <span>
                        <ListItem
                          button
                          style={
                            suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                }
                          }
                        >
                          <LocationOnSharpIcon color="action" />
                          {suggestion.description}
                        </ListItem>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}
export default LocationAutocomplete;
