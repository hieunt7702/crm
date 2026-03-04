import React from 'react';
import { TabItem, Tabs } from '../ui/Tabs';

interface ModuleMenuBaseProps {
  searchPlaceholder: string;
  onSearch: (query: string) => void;
  searchValue?: string;
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  rightSection?: React.ReactNode;
  className?: string;
  tabsClassName?: string;
}

export const ModuleMenuBase: React.FC<ModuleMenuBaseProps> = ({
  searchPlaceholder,
  onSearch,
  searchValue,
  tabs,
  activeTab,
  onTabChange,
  rightSection,
  className = '',
  tabsClassName = '',
}) => {
  const searchProps = searchValue !== undefined ? { value: searchValue } : {};

  return (
    <div className={`flex items-center justify-between gap-4 w-full ${className}`}>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative group max-w-sm w-full shrink-0">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 !text-[18px] text-neutral-400 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            {...searchProps}
            className="w-full h-[38px] bg-neutral-50 dark:bg-white/[0.02] border border-border-light dark:border-white/5 rounded-lg pl-10 pr-4 text-[13px] placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-200 transition-all focus:bg-white dark:focus:bg-black/20 focus:border-primary/40 focus:outline-none"
            placeholder={searchPlaceholder}
            type="text"
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
        <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block shrink-0" />
        <div className="flex-1 min-w-0">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={onTabChange}
            className={tabsClassName}
          />
        </div>
      </div>

      {rightSection && (
        <div className="flex items-center gap-2 shrink-0">
          {rightSection}
        </div>
      )}
    </div>
  );
};
