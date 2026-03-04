import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isActive?: boolean;
    icon?: string;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'outline',
    size = 'md',
    isActive = false,
    icon,
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-600 transition-all',
        secondary: 'bg-neutral-100 dark:bg-white/[0.05] text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/[0.08]',
        outline: `
      border transition-all duration-300
      ${isActive
                ? 'border-primary-600 text-primary bg-primary/[0.04]'
                : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-primary/[0.02]'}
    `,
        ghost: `
      border transition-all duration-300
      ${isActive
                ? 'text-primary border-primary-600 bg-primary/[0.06] dark:bg-primary/20'
                : 'text-neutral-500 dark:text-neutral-400 border-transparent hover:text-primary hover:bg-primary/[0.02]'}
    `,
        danger: 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg',
    };

    const sizes = {
        sm: 'px-3 h-8 text-[11px]',
        md: 'px-4 h-[38px] text-[13px]',
        lg: 'px-6 h-12 text-[15px]',
        icon: 'size-[38px] p-0',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {icon && <span className="material-symbols-outlined !text-[18px]">{icon}</span>}
            {children}
        </button>
    );
};
