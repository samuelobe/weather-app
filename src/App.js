import React, { useState } from "react";
import "./App.css";
import { SearchBar, SearchButton, WeatherIcon } from "./components/index";
import axios from "axios";
//import { retrieveWeather } from "./api/api";

function App() {
  const [weather, setWeather] = useState(0);
  const [input, setInput] = useState("");

  const retrieveWeather = () => {
    let city = input;
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7db6e9e9f0a09c976ef28e803be18f2e&units=imperial`
        )
        .then((r) => {
          console.log(r.data);
          setWeather(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const retrieveCity = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <p>Enter your current city</p>
      <div className="button-row">
        <SearchBar onInput={retrieveCity} />
        <SearchButton action={() => retrieveWeather()} />
      </div>
      <div>
        {weather === 0 ? (
          ""
        ) : (
          <div className="weather-row">
            {weather.main.temp} <WeatherIcon weatherType={weather.weather[0].description} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
