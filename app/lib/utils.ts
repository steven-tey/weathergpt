export async function getWeatherData(location: string) {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
}
