import { PageData } from "../components/page-data";
import { getWeatherData } from "../lib/utils";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { location: string };
}) {
  const data = await getWeatherData(params.location);

  return {
    title: `${data.location.name} Weather Data - WeatherGPT`,
    description:
      "WeatherGPT is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and server from Vercel's Edge Network.",
    twitter: {
      card: "summary_large_image",
      title: `${data.location.name} Weather Data - WeatherGPT`,
      description:
        "WeatherGPT is a ChatGPT Plugin to get the weather of any given location. Built with Next.js and server from Vercel's Edge Network.",
      creator: "@steventey",
    },
    themeColor: "#FFF",
  };
}

export default async function Location({
  params,
}: {
  params: { location: string };
}) {
  const data = await getWeatherData(params.location);

  return <PageData data={data} />;
}
