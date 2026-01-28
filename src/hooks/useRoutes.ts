import { useQuery } from "@tanstack/react-query";
import { computeRoutes, RouteRequest } from "../services/routesApi";

export const useRoutes = (request: RouteRequest | null) => {
  return useQuery({
    queryKey: ["routes", request],
    queryFn: () => (request ? computeRoutes(request) : Promise.resolve([])),
    enabled: Boolean(request),
  });
};
