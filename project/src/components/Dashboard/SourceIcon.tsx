import React from 'react';
import { Wind, Sun, Power } from 'lucide-react';
import type { EnergySource } from '../../types/energy';

interface SourceIconProps {
  source: EnergySource;
}

export const SourceIcon: React.FC<SourceIconProps> = ({ source }) => {
  switch (source) {
    case 'Solar':
      return <Sun className="w-4 h-4" />;
    case 'Wind':
      return <Wind className="w-4 h-4" />;
    default:
      return <Power className="w-4 h-4" />;
  }
};