import React, { useEffect } from 'react';
import { BreadcrumbItem } from '../../components/crm/Header';
import { useLayout } from '../../context/LayoutContext';

interface ModulePageLayoutProps {
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
    toolbar?: React.ReactNode;
    filterBar?: React.ReactNode;
    children: React.ReactNode;
    pagination?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export const ModulePageLayout: React.FC<ModulePageLayoutProps> = ({
    title,
    subtitle,
    actions,
    toolbar,
    filterBar,
    children,
    pagination,
    breadcrumbs
}) => {
    const { setBreadcrumbs } = useLayout();

    useEffect(() => {
        if (breadcrumbs) {
            setBreadcrumbs(breadcrumbs);
        }
    }, [breadcrumbs, setBreadcrumbs]);

    return (
        <div className="flex-1 flex flex-col min-h-0 bg-surface-light dark:bg-surface-dark overflow-hidden">
            {/* Header Section */}
            <div className="shrink-0 flex flex-col pt-10 px-8 pb-4 animate-fade-in group/header">
                {/* Title & Actions Row */}
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

                {/* Toolbar Row (Tabs, Search, etc.) */}
                {toolbar && (
                    <div className="flex items-center justify-between gap-4">
                        {toolbar}
                    </div>
                )}

                {/* Filter Bar Row */}
                {filterBar && (
                    <div className="mt-4 animate-slide-up">
                        {filterBar}
                    </div>
                )}
            </div>

            {/* Content Section (Grid/Table) */}
            <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
                {children}
            </div>

            {/* Footer Section (Pagination) */}
            {pagination && (
                <div className="shrink-0 border-t border-border-light dark:border-border-dark">
                    {pagination}
                </div>
            )}
        </div>
    );
};
