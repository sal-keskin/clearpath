import { useMemo } from "react";
import { AirQualityResponse } from "../services/airQualityApi";
import { PollenResponse } from "../services/pollenApi";
import { calculateRiskScore } from "../utils/riskCalculator";

type RiskInput = {
  airQuality: AirQualityResponse | null;
  pollen: PollenResponse | null;
};

export const useRiskAnalysis = ({ airQuality, pollen }: RiskInput) => {
  return useMemo(() => {
    if (!airQuality || !pollen) {
      return null;
    }

    return calculateRiskScore({
      aqi: airQuality.aqi,
      pollen: {
        tree: pollen.treeIndex,
        grass: pollen.grassIndex,
        weed: pollen.weedIndex,
      },
    });
  }, [airQuality, pollen]);
};
