import React from 'react';
import { Technician } from '../types';
import { Icon } from './Icon';

interface Props {
  technician: Technician;
  className?: string;
}

export const TechnicianCard: React.FC<Props> = ({ technician, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}>
      <div className="bg-brand-50 p-4 border-b border-brand-100 flex items-center justify-between">
        <span className="text-xs font-bold text-brand-700 uppercase tracking-wider flex items-center gap-1">
          <Icon name="ShieldCheck" size={14} />
          Verificado por InstaHome
        </span>
        <span className="text-xs text-gray-500">
           Antecedentes: {technician.backgroundCheckDate}
        </span>
      </div>
      
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative">
          <img 
            src={technician.photoUrl} 
            alt={technician.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full border-2 border-white">
            <Icon name="Check" size={12} />
          </div>
        </div>
        
        <h3 className="mt-4 text-lg font-bold text-gray-900">{technician.name}</h3>
        
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          <Icon name="Star" size={16} className="fill-current" />
          <span className="font-bold text-gray-900">{technician.rating}</span>
          <span className="text-gray-400 text-sm">({technician.jobsCompleted} trabajos)</span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
            {technician.specialties.map(spec => (
                <span key={spec} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {spec}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};