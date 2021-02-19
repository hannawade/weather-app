import React, { useState } from "react";
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
import { InputBase } from "@material-ui/core";

//TODO: Move styling to css

const LocationAutocomplete = (props) => {
  const [location, setLocation] = useState("");

  const handleChange = (location) => setLocation(location);

  const handleSelect = (location) => {
    geocodeByAddress(location)
      .then((results) =>
        setCoords(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        )
      )
      .catch((error) => console.error("Error", error));
  };

  function setCoords(lat, lon) {
    props.updateLocation(lat, lon);
  }

  return (
    <div id="Location-autocomplete">
      <PlacesAutocomplete
        value={location}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <InputBase
              disableUnderline={true}
              placeholder="Search location..."
              className="Location-search-input"
              startAdornment={
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              }
              {...getInputProps()}
            />
            <div className="Location-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                return (
                  <div {...getSuggestionItemProps(suggestion)}>
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
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
export default LocationAutocomplete;
