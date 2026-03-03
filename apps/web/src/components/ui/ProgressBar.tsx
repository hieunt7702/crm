import React from 'react';

interface ProgressBarProps {
  value: number;
  className?: string;
  variant?: 'green' | 'blue' | 'amber';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '', variant = 'blue' }) => {
  const variants = {
    green: 'bg-emerald-500',
    blue: 'bg-blue-500',
    amber: 'bg-amber-500',
  };

  const selectedVariant = variant || (value > 80 ? 'green' : value > 40 ? 'blue' : 'amber');

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[12px] text-neutral-400 w-8">{value}%</span>
      <div className="flex-1 h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${variants[selectedVariant as keyof typeof variants]}`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};
