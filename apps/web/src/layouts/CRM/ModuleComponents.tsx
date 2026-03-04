import React from 'react';

interface ModuleTitleSectionProps {
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
}

export const ModuleTitleSection: React.FC<ModuleTitleSectionProps> = ({ title, subtitle, actions }) => (
    <div className="flex flex-row items-end justify-between mb-8">
        <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                {title}
            </h1>
            {subtitle && (
                <p className="text-[14px] text-neutral-500 font-normal max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
        <div className="flex items-center gap-2 mb-1">
            {actions}
        </div>
    </div>
);

interface ModuleToolbarProps {
    children: React.ReactNode;
    rightSection?: React.ReactNode;
}

export const ModuleToolbar: React.FC<ModuleToolbarProps> = ({ children, rightSection }) => (
    <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4 flex-1 overflow-hidden">
            {children}
        </div>
        {rightSection && (
            <div className="flex items-center gap-2 shrink-0">
                {rightSection}
            </div>
        )}
    </div>
);
