import { useState } from "react";

type GeolocationState = {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
};

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setState({ latitude: null, longitude: null, error: "Geolocation not supported." });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      () => {
        setState({ latitude: null, longitude: null, error: "Unable to access location." });
      }
    );
  };

  return {
    ...state,
    requestLocation,
  };
};
