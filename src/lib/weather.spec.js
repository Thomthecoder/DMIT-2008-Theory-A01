import { describe, it, expect } from "vitest";
import { getWeather } from "./weather";

describe("getWeather", () => {
  it("returns weather data for a location", async () => {
    const data = await getWeather("Edmonton");
    expect(data.name).toBe("Edmonton");
    expect(data.main).toBeDefined();
    expect(data.weather).toBeDefined();
  });

  it("returns temperature and humidity", async () => {
    const data = await getWeather("Edmonton");
    expect(typeof data.main.temp).toBe("number");
    expect(typeof data.main.humidity).toBe("number");
  });
});
