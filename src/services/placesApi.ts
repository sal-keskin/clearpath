export type PlacePrediction = {
  id: string;
  description: string;
};

export const fetchPlacePredictions = async (_input: string): Promise<PlacePrediction[]> => {
  return [
    {
      id: "sample-place",
      description: "Sample destination",
    },
  ];
};
