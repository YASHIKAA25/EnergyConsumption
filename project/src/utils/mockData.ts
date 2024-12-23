import { EnergyData, DeviceData } from '../types/energy';
import { calculateHourlyOutput } from './energyCalculations';

export const generateMockEnergyData = (): EnergyData[] => {
  return Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const sources: Array<'Solar' | 'Wind' | 'Grid'> = ['Solar', 'Wind', 'Grid'];
    
    let source: typeof sources[number];
    let consumption: number;

    // Distribute energy sources based on time of day
    if (hour >= 10 && hour <= 16) {
      source = Math.random() > 0.3 ? 'Solar' : 'Grid';
      consumption = source === 'Solar' ? calculateHourlyOutput.solar(hour) : 1 + Math.random();
    } else if (hour >= 19 || hour <= 5) {
      source = Math.random() > 0.4 ? 'Wind' : 'Grid';
      consumption = source === 'Wind' ? calculateHourlyOutput.wind(hour) : 1.5 + Math.random();
    } else {
      source = sources[Math.floor(Math.random() * sources.length)];
      consumption = source === 'Solar' ? calculateHourlyOutput.solar(hour) :
                   source === 'Wind' ? calculateHourlyOutput.wind(hour) :
                   1 + Math.random() * 2;
    }

    return {
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      consumption,
      cost: 0.15 * consumption,
      source
    };
  });
};

export const mockDevices: DeviceData[] = [
  {
    id: '1',
    name: 'Smart Thermostat',
    type: 'Climate Control',
    consumption: 1.2,
    status: 'active',
    lastUpdated: new Date().toISOString(),
    energySource: 'Solar'
  },
  {
    id: '2',
    name: 'EV Charger',
    type: 'Charging Station',
    consumption: 7.4,
    status: 'inactive',
    lastUpdated: new Date().toISOString(),
    energySource: 'Grid'
  },
  {
    id: '3',
    name: 'Solar Inverter',
    type: 'Power Generation',
    consumption: 0,
    status: 'active',
    lastUpdated: new Date().toISOString(),
    energySource: 'Solar'
  },
  {
    id: '4',
    name: 'Wind Turbine',
    type: 'Power Generation',
    consumption: 0,
    status: 'active',
    lastUpdated: new Date().toISOString(),
    energySource: 'Wind'
  }
];