import { ImageResponse } from "next/server";
import { getWeatherData } from "../lib/utils";

export const runtime = "edge";

const stats = [
  {
    name: "TEMPERATURE",
    attr: "temp_c",
    unit: "°C",
  },
  {
    name: "WIND",
    attr: "wind_mph",
    unit: "mph",
  },
  {
    name: "HUMIDITY",
    attr: "humidity",
    unit: "%",
  },
];

export default async function LocationOG({
  params,
}: {
  params: { location: string };
}) {
  const clashData = await fetch(
    new URL("../fonts/ClashDisplay-Semibold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const data = await getWeatherData(params.location);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          fontFamily: "Clash",
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "-30px",
            fontSize: 100,
          }}
        >
          ⛅
        </div>
        <div tw="flex flex-col items-center justify-center mt-10">
          <b
            style={{
              fontSize: 60,
              color: "black",
              lineHeight: 1.8,
            }}
          >
            {data.location.name} Weather Data
          </b>
          <div
            tw="flex"
            style={{
              fontSize: 48,
              color: "black",
            }}
          >
            {stats.map(({ name, attr, unit }) => (
              <div
                key={attr}
                tw="flex flex-col items-center justify-center mx-10"
              >
                <p
                  style={{
                    fontSize: 28,
                    color: "#71717A",
                    marginBottom: "-36px",
                  }}
                >
                  {name}
                </p>
                <p>
                  {data.current[attr]}
                  {unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Clash",
          data: clashData,
        },
      ],
      emoji: "blobmoji",
    }
  );
}
