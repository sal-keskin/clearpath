export type PolylinePoint = {
  latitude: number;
  longitude: number;
};

export const sampleRoute = (points: PolylinePoint[], sampleSize: number) => {
  if (points.length <= sampleSize) {
    return points;
  }

  const step = Math.floor(points.length / sampleSize);
  return points.filter((_, index) => index % step === 0).slice(0, sampleSize);
};
