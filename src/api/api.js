import axios from "axios";

export function retrieveWeather() {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=7db6e9e9f0a09c976ef28e803be18f2e&units=imperial"
    )
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      console.log(e);
    });
}
