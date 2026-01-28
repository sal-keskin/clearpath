type RiskInput = {
  aqi: number;
  pollen: {
    tree: number;
    grass: number;
    weed: number;
  };
};

export const calculateRiskScore = ({ aqi, pollen }: RiskInput) => {
  const pollenScore = pollen.tree * 0.33 + pollen.grass * 0.33 + pollen.weed * 0.34;
  const combinedScore = aqi * 0.6 + pollenScore * 20 * 0.4;

  return {
    score: Math.round(combinedScore),
    category: combinedScore < 26 ? "Low" : combinedScore < 51 ? "Moderate" : "High",
  };
};
