// Simplified energy sources
export type EnergySource = 'Solar' | 'Wind' | 'Grid';

export interface EnergyData {
  timestamp: string;
  consumption: number;
  cost: number;
  source: EnergySource;
  generation?: number;
}

export interface EnergyBreakdown {
  source: EnergySource;
  percentage: number;
  amount: number;
}

export interface DeviceData {
  id: string;
  name: string;
  type: string;
  consumption: number;
  status: 'active' | 'inactive';
  lastUpdated: string;
  energySource: EnergySource;
}