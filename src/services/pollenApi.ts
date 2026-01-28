export type PollenPoint = {
  latitude: number;
  longitude: number;
};

export type PollenResponse = {
  treeIndex: number;
  grassIndex: number;
  weedIndex: number;
};

export const fetchPollen = async (_point: PollenPoint): Promise<PollenResponse> => {
  return {
    treeIndex: 2,
    grassIndex: 1,
    weedIndex: 1,
  };
};
