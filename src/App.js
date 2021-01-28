import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Topbar from "./components/Topbar";
import DetailsTable from "./components/DetailsTable";
import WeatherIcon from "./components/WeatherIcon";

//@material-ui components
import Container from "@material-ui/core/Container";

//TODO: Error handling for bad requests
//TODO: Move API url and API key to keys.js
//GOOGLE MAPS API KEY: AIzaSyCJE6UpDXcrIb2yv0_8879sD6Ph8xo9YlI
//OPEN WEATHER MAP API KEY: 047556730beba8c0ca9b089eeb343887

class App extends Component {
  constructor(props) {
    super(props);
    this.locationHandler = this.locationHandler.bind(this);
    this.unitsHandler = this.unitsHandler.bind(this);
  }

  //Defaults to Indianapolis if geolocation is turned off
  state = {
    isFetching: true,
    error: null,
    location: "Indianapolis",
    units: "imperial",
    lat: 39.7683,
    lon: -86.1584,
    data: [],
  };

  componentDidMount() {
    //Get latitude and longitude of user
    if (navigator.geolocation) {
      this.getPosition().then((position) => {
        this.locationHandler(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    } else {
      this.fetchData();
    }
  }

  //Calls fetchdata() when the unit or location has been updated
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.units !== this.state.units ||
      prevState.lat !== this.state.lat ||
      prevState.lon !== this.state.lon
    ) {
      this.fetchData();
    }
  }

  //
  componentWillUnmount() {}

  //Get weather data from API
  fetchData() {
    this.setState({ isFetching: true });

    var apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      this.state.lat +
      "&lon=" +
      this.state.lon +
      "&APPID=047556730beba8c0ca9b089eeb343887&units=" +
      this.state.units;

    //Fetch data and update state
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: [result],
          location: result.name,
          isFetching: false,
        });
      })
      .catch((e) => {
        this.setState({ ...this.state, isFetching: false, error: e });
      });
  }

  //Gets latitude and longitude from user
  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  //Sets latitude and longitude from user input
  //Used in Topbar.js
  locationHandler(lat, lon) {
    this.setState({ lat: lat, lon: lon });
  }

  //Sets units from user input
  //Used in Topbar.js
  unitsHandler(value) {
    this.setState({ units: value });
  }

  //Gives loading message while waiting for data
  handleWait() {
    if (this.state.isFetching)
      return (
        <div className="Fetching-message">Grabbing current weather data</div>
      );
    else {
      return this.state.data.map((d) => (
        <div>
          <WeatherIcon icon={d.weather[0].icon}></WeatherIcon>
          <DetailsTable
            location={this.state.location}
            units={this.state.units}
            main={d.weather[0].main}
            temp={d.main.temp}
            feels_like={d.main.feels_like}
            wind_speed={d.wind.speed}
            temp_min={d.main.temp_min}
            temp_max={d.main.temp_max}
            humidity={d.main.humidity}
            visibility={d.visibility}
            sunrise={d.sys.sunrise}
            sunset={d.sys.sunset}
          ></DetailsTable>
        </div>
      ));
    }
  }

  render() {
    return this.state.data.map((d) => (
      <div className="App" id="App">
        <Container>
          <Topbar
            unitsHandler={this.unitsHandler}
            locationHandler={this.locationHandler}
          ></Topbar>
          <Title location={this.state.location}></Title>
          {this.handleWait()}
        </Container>
      </div>
    ));
  }
}
export default App;
