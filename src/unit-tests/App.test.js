import { render, screen } from "@testing-library/react";
import { testData } from "./testData.js";
import AppComponent from "../App.js";
import WeatherIconComponent from "../components/WeatherIcon.jsx";
import DetailsTableComponent from "../components/DetailsTable.jsx";
import TitleComponent from "../components/Title.jsx";
import LocationAutocompleteComponent from "../components/LocationAutocomplete.jsx";
import TopbarComponent from "../components/Topbar.jsx";

//TODO: Make seperate spec for each component

//App Component
describe("App component", function () {
  beforeEach(function () {
    render(<AppComponent />);
    //const data = testData.toJSON();
  });
  //TODO: Config setupTests.js and add test for rendering of Location Autocomplete
  describe("should render all components", function () {
    it("renders App component", () => {
      const appDiv = document.getElementById("App");
      expect(appDiv).toBeDefined();
    });
    it("renders Title component", () => {
      const titleDiv = document.getElementById("Title");
      expect(titleDiv).toBeDefined();
    });
    it("renders Details Table component", () => {
      const detailsDiv = document.getElementById("Details-Table");
      expect(detailsDiv).toBeDefined();
    });
    it("renders Weather Icon component", () => {
      const weatherDiv = document.getElementById("Weather-Icon");
      expect(weatherDiv).toBeDefined();
    });
    it("renders Topbar component", () => {
      const topbarDiv = document.getElementById("Topbar");
      expect(topbarDiv).toBeDefined();
    });
  });

  //Topbar Component
  describe("Topbar component", function () {
    //render(<TopbarComponent />);
    beforeEach(function () {
      this.element = document.getElementById("Topbar");
    });
    it("contains unit selector", function () {
      const unitDiv = document.getElementById("Unit-selector");
      expect(unitDiv).toBeDefined();
    });
    describe("handleUnitChange()", function () {
      beforeEach(function () {
        const props = {};
      });
      it("should call App's unitHandler", function () {
        //expect this.props.unitHandler.ToHaveBeenCalled();
      });
    });
  });

  //Location Autocomplete Component
  describe("Location Autocomplete component", function () {
    //render(<LocationAutocompleteComponent />);
    describe("handleChange()", function () {
      //sets the state
    });
    describe("handleSelect()", function () {
      //calls setCoords()
    });
    describe("setCoords()", function () {
      //calls updateLocation()
    });
  });

  //Title Component
  describe("Title component", function () {
    it("should display location from App component", function () {
      const props = {
        location: data.testKansas.name,
      };
      //expect "Title-Locaiton" to contain data.testKansas.name
    });
    it("should display current time", function () {
      //moment should have been called
    });
  });

  //Details Table Component
  describe("Details Table component", function () {
    describe("formatTempUnit()", function () {
      it("should set measurement to celsius when unit is meteric", function () {
        const props = {
          units: "meteric",
        };
        //expect formatTempUnit() to return ("°C")
      });
      it("should set measurement to fahrenheit when unit is imperial", function () {
        const props = {
          units: "imperial",
        };
        //expect formatTempUnit() to return ("°F")
      });
    });
    describe("formatWindSpeedUnit()", function () {
      it("should set measurement to meters/sec when unit is meteric", function () {
        const props = {
          units: "meteric",
        };
        //expect formatWindSpeedUnit() to return ("meters/sec")
      });
      it("should set measurement to miles/hour when unit is imperial", function () {
        const props = {
          units: "imperial",
        };
        //expect formatWindSpeedUnit() to return ("miles/hour")
      });
    });
    describe("formatVisibility()", function () {
      it("should return unmanipulated visibility when unit is meteric", function () {
        const props = {
          units: "meteric",
          visibility: data.testKansas.visibility,
        };
        //expect formatVisibility() to return (data.testKansas.visibility)
      });
      it("should return visibility in miles when unit is imperial", function () {
        const props = {
          units: "imperial",
          visibility: data.testKansas.visibility,
        };
        //expect formatVisibility() to return (6.213712)
      });
    });
    describe("formatVisibilityUnit()", function () {
      it("should set measurement to meters when unit is meteric", function () {
        const props = {
          units: "meteric",
        };
        //expect formatVisibilityUnit() to return ("meters")
      });
      it("should set measurement to miles when unit is imperial", function () {
        const props = {
          units: "imperial",
        };
        //expect formatVisibiltyUnit() to return ("miles")
      });
    });

    //TODO: check html
  });

  //Weather Icon Component
  describe("Weather Icon component", function () {
    describe("getIconPath()", function () {
      it("should return image matching the weather", function () {
        const props = {
          icon: data.testKansas.weather[0].icon,
        };
        //getIconPath();
        //expect getIconPath() to return ("weather-icons/01n.png")
      });
    });
  });
});
