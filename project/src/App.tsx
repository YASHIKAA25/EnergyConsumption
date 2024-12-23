import React, { useState } from 'react';
import { EnergyChart } from './components/Dashboard/EnergyChart';
import { DeviceList } from './components/Dashboard/DeviceList';
import { Stats } from './components/Dashboard/Stats';
import { Recommendations } from './components/Dashboard/Recommendations';
import { generateMockEnergyData, mockDevices } from './utils/mockData';
import type { DeviceData } from './types/energy';

export default function App() {
  const [devices, setDevices] = useState<DeviceData[]>(mockDevices);
  const energyData = generateMockEnergyData();

  const handleToggleDevice = (id: string) => {
    setDevices(devices.map(device => 
      device.id === id 
        ? { ...device, status: device.status === 'active' ? 'inactive' : 'active' }
        : device
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Energy Consumption Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and optimize your sustainable energy usage in real-time</p>
        </header>

        <Stats
          currentConsumption={12.5}
          costSavings={45.20}
          carbonReduction={28.5}
          trend={-15}
        />

        <div className="mt-8">
          <EnergyChart data={energyData} />
        </div>

        <Recommendations devices={devices} energyData={energyData} />

        <div className="mt-8">
          <DeviceList 
            devices={devices}
            onToggleDevice={handleToggleDevice}
          />
        </div>
      </div>
    </div>
  );
}