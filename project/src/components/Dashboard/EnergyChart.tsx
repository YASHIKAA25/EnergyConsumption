import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { SourceIcon } from './SourceIcon';
import { sourceColors } from './constants';
import type { EnergyData, EnergySource } from '../../types/energy';

interface EnergyChartProps {
  data: EnergyData[];
}

export const EnergyChart: React.FC<EnergyChartProps> = ({ data }) => {
  const [selectedSources, setSelectedSources] = useState<EnergySource[]>(
    ['Solar', 'Wind', 'Grid']
  );

  const toggleSource = (source: EnergySource) => {
    setSelectedSources(prev => 
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Energy Sources Distribution</h2>
        <div className="flex gap-2">
          {Object.entries(sourceColors).map(([source, color]) => (
            <button
              key={source}
              onClick={() => toggleSource(source as EnergySource)}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                selectedSources.includes(source as EnergySource)
                  ? 'bg-gray-100'
                  : 'bg-gray-50 opacity-50'
              }`}
            >
              <SourceIcon source={source as EnergySource} />
              {source}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={(value) => format(new Date(value), 'HH:mm')}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(value) => format(new Date(value), 'MMM dd, yyyy HH:mm')}
              formatter={(value: number, name: string) => [
                `${value.toFixed(2)} kWh`,
                name
              ]}
            />
            <Legend />
            {selectedSources.map(source => (
              <Line
                key={source}
                type="monotone"
                dataKey="consumption"
                data={data.filter(d => d.source === source)}
                name={source}
                stroke={sourceColors[source]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedSources.map(source => {
          const sourceData = data.filter(d => d.source === source);
          const totalConsumption = sourceData.reduce((sum, d) => sum + d.consumption, 0);
          
          return (
            <div 
              key={source}
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${sourceColors[source]}15` }}
            >
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: sourceColors[source] }}>
                <SourceIcon source={source} />
                {source}
              </div>
              <p className="mt-1 text-lg font-semibold">
                {totalConsumption.toFixed(1)} kWh
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};