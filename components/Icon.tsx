import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;

  return <LucideIcon size={size} className={className} />;
};