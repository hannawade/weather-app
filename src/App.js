import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import DetailsTable from "./components/DetailsTable";

//@material-ui components
import Container from "@material-ui/core/Container";

//TODO: Give isFetching() warning
//TODO: Move API url and API key to key.js
//TODO: Wait to fetch until after exploring geolocation

class App extends Component {
  constructor(props) {
    super(props);
    this.locationHandler = this.locationHandler.bind(this);
    this.unitsHandler = this.unitsHandler.bind(this);
  }

  state = {
    isFetching: false,
    location: "Indianapolis",
    units: "imperial",
    geo: false,
    lat: null,
    lon: null,
    data: [],
  };

  componentDidMount() {
    //Get latitude and longitude of user
    if (navigator.geolocation) {
      this.getPosition().then((position) => {
        this.setCoords(position.coords.latitude, position.coords.longitude);
      });
    }
    //Call fetchData() every 1 second
    this.fetchData();
    this.timer = setInterval(() => this.fetchData(), 1000);
  }

  //Clears timer
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  //Get weather data from API
  fetchData() {
    this.setState({ isFetching: true });

    var apiUrl = "";

    //If user has geolocation enabled, call with their latitude and longitude
    if (this.state.geo === true) {
      apiUrl =
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        this.state.lat +
        "&lon=" +
        this.state.lon +
        "&APPID=047556730beba8c0ca9b089eeb343887&units=" +
        this.state.units;
    }
    //Call with city name if no geolocation or is manual search from Topbar
    else {
      apiUrl =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        this.state.location +
        "&APPID=047556730beba8c0ca9b089eeb343887&units=" +
        this.state.units;
    }

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
        this.setState({ ...this.state, isFetching: false });
      });
  }

  //Gets latitude and longitude from user
  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  //Sets latitude and longitude from user
  setCoords(lat, lon) {
    this.setState({
      geo: true,
      lat: lat,
      lon: lon,
    });
  }

  //Used in Topbar.js
  locationHandler(value) {
    this.setState({ geo: false, location: value });
  }

  //Used in Topbar.js
  unitsHandler(value) {
    this.setState({ units: value });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Container>
          <Topbar
            location={this.state.location}
            unitsHandler={this.unitsHandler}
            locationHandler={this.locationHandler}
          ></Topbar>
          {data.map((d) => (
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
          ))}
        </Container>
      </div>
    );
  }
}
export default App;
