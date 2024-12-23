import { EnergyData, EnergySource, EnergyBreakdown } from '../types/energy';

export const calculateEnergyBreakdown = (data: EnergyData[]): EnergyBreakdown[] => {
  const totalConsumption = data.reduce((sum, entry) => sum + entry.consumption, 0);
  
  const sourceMap = new Map<EnergySource, number>();
  data.forEach(entry => {
    const current = sourceMap.get(entry.source) || 0;
    sourceMap.set(entry.source, current + entry.consumption);
  });

  return Array.from(sourceMap.entries()).map(([source, amount]) => ({
    source,
    amount,
    percentage: (amount / totalConsumption) * 100
  }));
};

export const calculateCarbonOffset = (consumption: number, source: EnergySource): number => {
  // Carbon offset calculations (kg CO2 per kWh)
  const carbonFactors: Record<EnergySource, number> = {
    Solar: 0.041,
    Wind: 0.011,
    Hydro: 0.024,
    Biomass: 0.23,
    Grid: 0.85
  };

  return consumption * (carbonFactors.Grid - carbonFactors[source]);
};