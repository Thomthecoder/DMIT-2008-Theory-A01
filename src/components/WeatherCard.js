import Card from "./Card";
import Image from "next/image";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: conditions, wind } = weather;
  const icon = conditions[0].icon;
  const description = conditions[0].description;

  return (
    <Card colSpan="md:col-span-1" rowSpan="md:row-span-1" title="Weather">
      <div className="flex flex-col gap-2 mt-2">
        <p className="text-sm text-neutral-300">{name}</p>
        <div className="flex items-center gap-2">
          <Image
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            width={50}
            height={50}
          />
          <span className="text-3xl font-semibold">{Math.round(main.temp)}°C</span>
        </div>
        <p className="text-sm capitalize text-neutral-300">{description}</p>
        <div className="flex gap-4 text-xs text-neutral-400">
          <span>Feels like {Math.round(main.feels_like)}°C</span>
          <span>Humidity {main.humidity}%</span>
          <span>Wind {wind.speed} m/s</span>
        </div>
      </div>
    </Card>
  );
}
