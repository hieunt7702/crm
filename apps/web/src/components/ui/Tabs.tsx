import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
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

interface TabButtonProps {
    tab: TabItem;
    isActive: boolean;
    onClick?: () => void;
    buttonRef?: (node: HTMLButtonElement | null) => void;
    isMeasureOnly?: boolean;
}

const TAB_GAP = 4;

const getTotalWidth = (items: TabItem[], widthMap: Record<string, number>) =>
    items.reduce((total, item, index) => total + (widthMap[item.id] ?? 0) + (index > 0 ? TAB_GAP : 0), 0);

const TabButton: React.FC<TabButtonProps> = ({
    tab,
    isActive,
    onClick,
    buttonRef,
    isMeasureOnly = false,
}) => (
    <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        tabIndex={isMeasureOnly ? -1 : 0}
        aria-hidden={isMeasureOnly ? true : undefined}
        className={`
            flex items-center gap-2 px-4 py-1.5 text-[12px] font-bold rounded-lg transition-all whitespace-nowrap relative group
            ${isActive
                ? 'text-primary bg-primary/[0.04]'
                : 'text-neutral-500 hover:text-primary hover:bg-primary/[0.01]'}
        `}
    >
        {tab.icon && (
            <span className={`material-symbols-outlined !text-[18px] transition-colors ${isActive ? 'text-primary' : 'text-neutral-400 group-hover:text-primary'}`}>
                {tab.icon}
            </span>
        )}
        <span>{tab.label}</span>
    </button>
);

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className = '' }) => {
    const outerRef = useRef<HTMLDivElement>(null);
    const measureMoreRef = useRef<HTMLButtonElement>(null);
    const measureTabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const [visibleTabs, setVisibleTabs] = useState<TabItem[]>(tabs);
    const [overflowTabs, setOverflowTabs] = useState<TabItem[]>([]);

    const calculateOverflow = useCallback(() => {
        const host = outerRef.current;

        if (!host) {
            return;
        }

        if (tabs.length === 0) {
            setVisibleTabs([]);
            setOverflowTabs([]);
            return;
        }

        const availableWidth = host.clientWidth;
        if (availableWidth <= 0) {
            setVisibleTabs(tabs);
            setOverflowTabs([]);
            return;
        }

        const widthMap = tabs.reduce<Record<string, number>>((acc, tab) => {
            acc[tab.id] = measureTabRefs.current[tab.id]?.offsetWidth ?? 0;
            return acc;
        }, {});

        const hasUnmeasuredTab = tabs.some((tab) => (widthMap[tab.id] ?? 0) <= 0);
        if (hasUnmeasuredTab) {
            setVisibleTabs(tabs);
            setOverflowTabs([]);
            return;
        }

        const moreButtonWidth = measureMoreRef.current?.offsetWidth ?? 84;
        const fullWidth = getTotalWidth(tabs, widthMap);

        if (fullWidth <= availableWidth) {
            setVisibleTabs(tabs);
            setOverflowTabs([]);
            return;
        }

        const availableForTabs = Math.max(availableWidth - moreButtonWidth - TAB_GAP, 0);
        const nextVisible: TabItem[] = [];
        const nextOverflow: TabItem[] = [];
        let usedWidth = 0;

        tabs.forEach((tab) => {
            const tabWidth = widthMap[tab.id] ?? 0;
            const nextWidth = usedWidth + tabWidth + (nextVisible.length > 0 ? TAB_GAP : 0);

            if (nextWidth <= availableForTabs || nextVisible.length === 0) {
                nextVisible.push(tab);
                usedWidth = nextWidth;
                return;
            }

            nextOverflow.push(tab);
        });

        if (nextOverflow.some((tab) => tab.id === activeTab)) {
            const activeOverflowTab = nextOverflow.find((tab) => tab.id === activeTab);

            if (activeOverflowTab) {
                const rebalancedVisible = [...nextVisible];
                const rebalancedOverflow = nextOverflow.filter((tab) => tab.id !== activeOverflowTab.id);

                while (rebalancedVisible.length > 0) {
                    const candidateVisible = [...rebalancedVisible, activeOverflowTab];
                    if (getTotalWidth(candidateVisible, widthMap) <= availableForTabs) {
                        break;
                    }

                    const movedTab = rebalancedVisible.pop();
                    if (!movedTab) {
                        break;
                    }
                    rebalancedOverflow.unshift(movedTab);
                }

                rebalancedVisible.push(activeOverflowTab);
                setVisibleTabs(rebalancedVisible);
                setOverflowTabs(rebalancedOverflow);
                return;
            }
        }

        setVisibleTabs(nextVisible);
        setOverflowTabs(nextOverflow);
    }, [activeTab, tabs]);

    useLayoutEffect(() => {
        const host = outerRef.current;
        if (!host) {
            return;
        }

        const recalculate = () => {
            requestAnimationFrame(calculateOverflow);
        };

        recalculate();

        const resizeObserver = new ResizeObserver(recalculate);
        resizeObserver.observe(host);
        if (host.parentElement) {
            resizeObserver.observe(host.parentElement);
        }

        return () => resizeObserver.disconnect();
    }, [calculateOverflow]);

    useLayoutEffect(() => {
        const tabIds = new Set(tabs.map((tab) => tab.id));
        Object.keys(measureTabRefs.current).forEach((tabId) => {
            if (!tabIds.has(tabId)) {
                delete measureTabRefs.current[tabId];
            }
        });
    }, [tabs]);

    return (
        <div
            ref={outerRef}
            className={`relative min-w-0 w-full ${className}`}
        >
            <div className="inline-flex max-w-full items-center gap-1 p-1 bg-white dark:bg-white/[0.02] rounded-lg border border-border-light dark:border-white/5 h-[38px]">
                <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                    {visibleTabs.map((tab) => (
                        <TabButton
                            key={tab.id}
                            tab={tab}
                            isActive={activeTab === tab.id}
                            onClick={() => onChange(tab.id)}
                        />
                    ))}
                </div>

                {overflowTabs.length > 0 && (
                    <div className="shrink-0">
                        <Dropdown
                            position="bottom-right"
                            trigger={({ isOpen }) => (
                                <button
                                    type="button"
                                    className={`
                                flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold rounded-lg transition-all shrink-0
                                ${isOpen || overflowTabs.some(t => t.id === activeTab)
                                            ? 'text-primary bg-primary/[0.04]'
                                            : 'text-neutral-500 hover:text-primary'}
                            `}
                                >
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
                    </div>
                )}
            </div>

            <div className="pointer-events-none absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
                <div className="flex items-center gap-1">
                    {tabs.map((tab) => (
                        <TabButton
                            key={`measure-${tab.id}`}
                            tab={tab}
                            isActive={false}
                            isMeasureOnly
                            buttonRef={(node) => {
                                measureTabRefs.current[tab.id] = node;
                            }}
                        />
                    ))}

                    <button
                        ref={measureMoreRef}
                        type="button"
                        className="flex items-center gap-1 px-3 py-1.5 text-[12px] font-bold rounded-lg shrink-0"
                    >
                        <span>More</span>
                        <span className="material-symbols-outlined !text-[18px]">expand_more</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
