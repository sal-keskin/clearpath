export type RouteRequest = {
  origin: string;
  destination: string;
};

export type RouteResponse = {
  durationMinutes: number;
  distanceKm: number;
};

export const computeRoutes = async (_request: RouteRequest): Promise<RouteResponse[]> => {
  return [
    {
      durationMinutes: 22,
      distanceKm: 7.4,
    },
  ];
};
