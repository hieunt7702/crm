import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-emerald-500/10 text-emerald-500',
    warning: 'bg-amber-500/10 text-amber-500',
    neutral: 'bg-neutral-500/10 text-neutral-500',
  };

  return (
    <span className={`px-1 py-0.5 rounded text-[9px] font-bold shrink-0 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
