import { headers } from "next/headers";
import { getWeatherData } from "./lib/utils";
import { PageData } from "./components/page";

export const runtime = "edge";

export default async function Page() {
  const parsedCity = headers().get("x-vercel-ip-city");
  const city = !parsedCity || parsedCity === "null" ? "Dallas" : parsedCity;
  const data = await getWeatherData(city);

  return <PageData data={data} />;
}
