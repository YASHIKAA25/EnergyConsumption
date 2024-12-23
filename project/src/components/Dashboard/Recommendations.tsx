import React from 'react';
import { Lightbulb, Leaf, ThermometerSun, Plug, Monitor, Home } from 'lucide-react';
import type { DeviceData, EnergyData } from '../../types/energy';

interface RecommendationsProps {
  devices: DeviceData[];
  energyData: EnergyData[];
}

export const Recommendations: React.FC<RecommendationsProps> = () => {
  const energySavingTips = [
    {
      id: 1,
      title: 'Smart Thermostat Usage',
      description: 'Set your thermostat to 78°F in summer and 68°F in winter. Each degree adjustment can save 6-8% on energy costs.',
      icon: <ThermometerSun className="w-6 h-6" />,
      steps: [
        'Install a programmable thermostat',
        'Use ceiling fans to improve circulation',
        'Regular HVAC maintenance',
        'Seal air leaks around windows and doors'
      ]
    },
    {
      id: 2,
      title: 'Efficient Lighting',
      description: 'Switch to LED bulbs and make use of natural light when possible.',
      icon: <Lightbulb className="w-6 h-6" />,
      steps: [
        'Replace all bulbs with LED alternatives',
        'Install motion sensors in less-used areas',
        'Clean windows to maximize natural light',
        'Use task lighting instead of whole room lighting'
      ]
    },
    {
      id: 3,
      title: 'Appliance Management',
      description: 'Smart usage of household appliances can significantly reduce energy consumption.',
      icon: <Plug className="w-6 h-6" />,
      steps: [
        'Run full loads of laundry and dishes',
        'Use cold water for washing clothes',
        'Air dry dishes and clothes when possible',
        'Unplug devices when not in use'
      ]
    },
    {
      id: 4,
      title: 'Electronics Usage',
      description: 'Reduce phantom power consumption from electronics and optimize device usage.',
      icon: <Monitor className="w-6 h-6" />,
      steps: [
        'Use power strips for easy shutdown',
        'Enable power-saving modes',
        'Adjust screen brightness',
        'Schedule regular device maintenance'
      ]
    },
    {
      id: 5,
      title: 'Home Insulation',
      description: 'Proper insulation can reduce heating and cooling costs by up to 15%.',
      icon: <Home className="w-6 h-6" />,
      steps: [
        'Add weatherstripping around doors',
        'Insulate your water heater',
        'Check attic insulation levels',
        'Install window films or curtains'
      ]
    },
    {
      id: 6,
      title: 'Green Habits',
      description: 'Develop energy-conscious habits for long-term savings.',
      icon: <Leaf className="w-6 h-6" />,
      steps: [
        'Turn off lights when leaving rooms',
        'Use natural ventilation when possible',
        'Regular equipment maintenance',
        'Monitor energy usage patterns'
      ]
    }
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-semibold">Energy Saving Guide</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {energySavingTips.map(tip => (
          <div key={tip.id} className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition-all hover:border-blue-100">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                  {tip.icon}
                </div>
                <h3 className="font-medium">{tip.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{tip.description}</p>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Steps to Take:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {tip.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-block w-5 h-5 bg-green-100 text-green-700 rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};