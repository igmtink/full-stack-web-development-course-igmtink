// !Endpoint
const openWeatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// !Parameter
const openWeatherParameter = "London";
const openWeatherTemp = "imperial";

// !Authentication
const openWeatherApiKey = "9f5ace52b189a9cbf3cac1b494987d3d";

const openWeather =
  openWeatherEndpoint +
  "?" +
  "q=" +
  openWeatherParameter +
  "&" +
  "units=" +
  openWeatherTemp +
  "&" +
  "appid=" +
  openWeatherApiKey;

// !JSON Format
console.log(openWeather);
