export const formatDistance = (meters: number) => {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(1)} km`;
  }
  return `${Math.round(meters)} m`;
};

export const formatDuration = (seconds: number) => {
  const minutes = Math.round(seconds / 60);
  return `${minutes} min`;
};
