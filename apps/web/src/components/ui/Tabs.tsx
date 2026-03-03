import React, { useLayoutEffect, useRef, useState } from 'react';
import { Dropdown } from './Dropdown';

export interface TabItem {
    id: string;
    label: string;
    icon?: string;
}

interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (tabId: string) => void;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const outerRef = useRef<HTMLDivElement>(null);
    const [visibleTabs, setVisibleTabs] = useState<TabItem[]>(tabs);
    const [overflowTabs, setOverflowTabs] = useState<TabItem[]>([]);
    const [isCalculated, setIsCalculated] = useState(false);

    useLayoutEffect(() => {
        const calculateOverflow = () => {
            if (!containerRef.current || !outerRef.current) return;

            // Get available space from the parent of the Tabs component
            const parentElement = outerRef.current.parentElement;
            if (!parentElement) return;

            // Calculate total available width for the entire Tabs component
            // We'll estimate available space by looking at parent's width 
            // but this can be tricky. A better way is to see how much space we actually have.
            const parentWidth = parentElement.offsetWidth;
            const moreButtonWidth = 100;

            let currentWidth = 0;
            const newVisible: TabItem[] = [];
            const newOverflow: TabItem[] = [];

            const children = Array.from(containerRef.current.children) as HTMLElement[];

            if (children.length === 0) {
                setIsCalculated(true);
                return;
            }

            tabs.forEach((tab, index) => {
                const child = children[index];
                if (!child) return;

                const tabWidth = child.offsetWidth + 4; // Including gap

                // Rule: If adding this tab exceeds available width, move to overflow
                // We always keep at least the first tab if possible
                if (currentWidth + tabWidth > parentWidth - (newOverflow.length > 0 ? moreButtonWidth : 0) && index > 0) {
                    newOverflow.push(tab);
                } else {
                    newVisible.push(tab);
                    currentWidth += tabWidth;
                }
            });

            setVisibleTabs(newVisible);
            setOverflowTabs(newOverflow);
            setIsCalculated(true);
        };

        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(calculateOverflow);
        });

        if (outerRef.current?.parentElement) {
            resizeObserver.observe(outerRef.current.parentElement);
        }

        calculateOverflow();
        return () => resizeObserver.disconnect();
    }, [tabs]);

    return (
        <div
            ref={outerRef}
            className={`flex items-center gap-1 p-1 bg-neutral-100 dark:bg-white/[0.04] rounded-lg border border-border-light dark:border-white/5 w-fit max-w-full h-[38px] ${className}`}
        >
            <div ref={containerRef} className="flex items-center gap-1">
                {(isCalculated ? visibleTabs : tabs).map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`
                            flex items-center gap-2 px-4 py-1.5 text-[12px] font-bold rounded-md transition-all whitespace-nowrap relative group
                            ${activeTab === tab.id
                                ? 'text-primary bg-primary/[0.04] shadow-sm shadow-primary/5'
                                : 'text-neutral-500 hover:text-primary hover:bg-primary/[0.01]'}
                        `}
                    >
                        {tab.icon && (
                            <span className={`material-symbols-outlined !text-[18px] transition-colors ${activeTab === tab.id ? 'text-primary' : 'text-neutral-400 group-hover:text-primary'}`}>
                                {tab.icon}
                            </span>
                        )}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {overflowTabs.length > 0 && (
                <Dropdown
                    position="bottom-right"
                    trigger={({ isOpen }) => (
                        <button className={`
                            flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold rounded-md transition-all shrink-0
                            ${isOpen || overflowTabs.some(t => t.id === activeTab)
                                ? 'text-primary bg-primary/[0.04] shadow-sm shadow-primary/5'
                                : 'text-neutral-500 hover:text-primary'}
                        `}>
                            <span>More</span>
                            <span className={`material-symbols-outlined !text-[18px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>
                    )}
                    sections={[{
                        items: overflowTabs.map(tab => ({
                            id: tab.id,
                            label: tab.label,
                            icon: tab.icon,
                            onClick: () => onChange(tab.id),
                            isActive: activeTab === tab.id
                        }))
                    }]}
                />
            )}
        </div>
    );
};
