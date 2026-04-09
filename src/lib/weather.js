export async function getWeather(location) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error(`Weather fetch failed: ${res.status}`);
  return res.json();
}
