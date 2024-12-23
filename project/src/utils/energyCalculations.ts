import { EnergyData, EnergySource } from '../types/energy';

export const calculateHourlyOutput = {
  solar: (hour: number): number => {
    // Peak solar production between 10 AM and 4 PM
    if (hour >= 10 && hour <= 16) {
      return 2.5 + Math.random() * 2;
    } else if ((hour >= 7 && hour < 10) || (hour > 16 && hour <= 19)) {
      return 1 + Math.random() * 1.5;
    }
    return 0.1 + Math.random() * 0.5;
  },
  
  wind: (hour: number): number => {
    // Higher wind energy during evening/night
    if (hour >= 18 || hour <= 6) {
      return 1.5 + Math.random() * 2;
    }
    return 0.5 + Math.random() * 1;
  }
};