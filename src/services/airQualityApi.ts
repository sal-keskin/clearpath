export type AirQualityPoint = {
  latitude: number;
  longitude: number;
};

export type AirQualityResponse = {
  aqi: number;
  category: string;
};

export const fetchAirQuality = async (_point: AirQualityPoint): Promise<AirQualityResponse> => {
  return {
    aqi: 42,
    category: "Good",
  };
};
