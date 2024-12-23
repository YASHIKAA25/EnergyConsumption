import React from 'react';
import { TrendingDown, TrendingUp, DollarSign, Leaf } from 'lucide-react';

interface StatsProps {
  currentConsumption: number;
  costSavings: number;
  carbonReduction: number;
  trend: number;
}

export const Stats: React.FC<StatsProps> = ({
  currentConsumption,
  costSavings,
  carbonReduction,
  trend
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Current Consumption"
        value={`${currentConsumption.toFixed(1)} kWh`}
        icon={<Leaf className="w-6 h-6" />}
        trend={trend}
      />
      <StatCard
        title="Cost Savings"
        value={`$${costSavings.toFixed(2)}`}
        icon={<DollarSign className="w-6 h-6" />}
        trend={null}
      />
      <StatCard
        title="Carbon Reduction"
        value={`${carbonReduction.toFixed(1)} kg`}
        icon={<Leaf className="w-6 h-6" />}
        trend={null}
      />
      <StatCard
        title="Efficiency Score"
        value="92"
        icon={<Leaf className="w-6 h-6" />}
        trend={null}
        suffix="%"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: number | null;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, suffix }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
        {trend !== null && (
          <div className={`flex items-center ${trend >= 0 ? 'text-red-500' : 'text-green-500'}`}>
            {trend >= 0 ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            <span className="text-sm">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-gray-500 text-sm">{title}</h3>
      <p className="mt-2 text-2xl font-semibold">
        {value}{suffix}
      </p>
    </div>
  );
};