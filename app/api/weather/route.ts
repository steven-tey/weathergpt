import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export async function GET(req: NextRequest) {
  let location = req.nextUrl.searchParams.get("location");
  if (!location) {
    const { city } = geolocation(req);
    console.log(city, geolocation(req));
    location = city || "San Francisco";
  }

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`
  ).then((res) => res.json());

  return NextResponse.json(response);
}
