import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { createElement } from "react";
import WeatherCard from "./WeatherCard";

const mockWeather = {
  name: "Edmonton",
  main: { temp: 5, feels_like: 2, humidity: 60 },
  weather: [{ description: "clear sky", icon: "01d" }],
  wind: { speed: 3 },
};

describe("WeatherCard", () => {
  it("renders the city name", () => {
    render(createElement(WeatherCard, { weather: mockWeather }));
    expect(screen.getByText("Edmonton")).toBeInTheDocument();
  });

  it("renders the temperature", () => {
    render(createElement(WeatherCard, { weather: mockWeather }));
    expect(screen.getByText("5°C")).toBeInTheDocument();
  });

  it("renders the weather description", () => {
    render(createElement(WeatherCard, { weather: mockWeather }));
    expect(screen.getByText("clear sky")).toBeInTheDocument();
  });

  it("renders nothing when weather is null", () => {
    const { container } = render(createElement(WeatherCard, { weather: null }));
    expect(container).toBeEmptyDOMElement();
  });
});
