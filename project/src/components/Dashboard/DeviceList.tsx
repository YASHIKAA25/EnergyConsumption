import React from 'react';
import { Power, Zap } from 'lucide-react';
import type { DeviceData } from '../../types/energy';

interface DeviceListProps {
  devices: DeviceData[];
  onToggleDevice: (id: string) => void;
}

export const DeviceList: React.FC<DeviceListProps> = ({ devices, onToggleDevice }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Connected Devices</h2>
      <div className="space-y-4">
        {devices.map((device) => (
          <div 
            key={device.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${device.status === 'active' ? 'bg-green-100' : 'bg-gray-100'}`}>
                <Zap className={`w-6 h-6 ${device.status === 'active' ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
              <div>
                <h3 className="font-medium">{device.name}</h3>
                <p className="text-sm text-gray-500">{device.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium">{device.consumption.toFixed(1)} kWh</p>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(device.lastUpdated).toLocaleTimeString()}
                </p>
              </div>
              <button
                onClick={() => onToggleDevice(device.id)}
                className={`p-2 rounded-full transition-colors ${
                  device.status === 'active' 
                    ? 'bg-green-100 hover:bg-green-200' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Power className={`w-5 h-5 ${
                  device.status === 'active' ? 'text-green-600' : 'text-gray-400'
                }`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};