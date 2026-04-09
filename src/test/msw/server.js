import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const mockWeatherData = {
  name: "Edmonton",
  main: {
    temp: 5,
    feels_like: 2,
    humidity: 60,
  },
  weather: [{ description: "clear sky", icon: "01d" }],
  wind: { speed: 3 },
};

const handlers = [
  http.get("https://api.openweathermap.org/data/2.5/weather", () => {
    return HttpResponse.json(mockWeatherData);
  }),
];

export const server = setupServer(...handlers);
