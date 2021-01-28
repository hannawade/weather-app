import React, { Component } from "react";
import "../App.css";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

//@material-ui icons
import SearchIcon from "@material-ui/icons/Search";

//@material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

//TODO: Add styling to searchbar and dropdown

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
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
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
