import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { Dropdown } from '../ui/Dropdown';
import { Tabs } from '../ui/Tabs';

interface EmployeeListHeaderProps {
  onSearch: (query: string) => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
  onAdd: () => void;
  filters: Record<string, string[]>;
  onFilterChange: (field: string, value: string) => void;
  onClearFilters: () => void;
}

export const EmployeeListHeader: React.FC<EmployeeListHeaderProps> = ({
  onSearch,
  currentTab,
  onTabChange,
  onAdd,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const { t } = useTranslation();
  const [isFilterBarOpen, setIsFilterBarOpen] = React.useState(false);
  const activeFiltersCount = Object.values(filters).flat().length;
  return (
    <div className="shrink-0 flex flex-col animate-fade-in bg-white dark:bg-transparent px-8 pt-12 pb-4">
      {/* Header Title & CTA Row */}
      <div className="flex flex-row items-end justify-between mb-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">{t('employees.title')}</h1>
          <p className="text-[14px] text-neutral-500 font-normal max-w-md">{t('employees.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button icon="file_upload">{t('employees.import')}</Button>
          <Button icon="file_download">{t('employees.export')}</Button>
          <Button
            variant="primary"
            icon="person_add"
            onClick={onAdd}
            className="px-5 shadow-lg shadow-primary/20"
          >
            {t('employees.add_employee')}
          </Button>
        </div>
      </div>

      {/* Unified Toolbar Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative group max-w-sm w-full shrink-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 !text-[18px] text-neutral-400 group-focus-within:text-primary transition-colors">search</span>
            <input
              className="w-full h-[38px] bg-neutral-100 dark:bg-white/[0.03] border border-border-light dark:border-white/5 rounded-md pl-10 pr-4 text-[13px] placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-200 transition-all focus:bg-white dark:focus:bg-black/20 focus:ring-1 focus:ring-primary/40"
              placeholder={t('employees.search_placeholder')}
              type="text"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block shrink-0"></div>

          <div className="flex-1 min-w-0">
            <Tabs
              tabs={[
                { id: 'active', label: t('employees.tabs.active'), icon: 'check_circle' },
                { id: 'on-leave', label: t('employees.tabs.on_leave'), icon: 'hotel' },
                { id: 'all', label: t('employees.tabs.all'), icon: 'group' },
                { id: 'locked', label: t('employees.tabs.locked'), icon: 'lock' },
                { id: 'archived', label: t('employees.tabs.archived'), icon: 'archive' },
                { id: 'on-boarding', label: t('employees.tabs.on_boarding'), icon: 'hail' },
                { id: 'interns', label: t('employees.tabs.interns'), icon: 'school' },
                { id: 'remote', label: t('employees.tabs.remote'), icon: 'home_work' },
                { id: 'office', label: t('employees.tabs.office'), icon: 'apartment' },
                { id: 'contractors', label: t('employees.tabs.contractors'), icon: 'contact_page' },
                { id: 'probation', label: t('employees.tabs.probation'), icon: 'timer' },
                { id: 'management', label: t('employees.tabs.management'), icon: 'admin_panel_settings' },
              ]}
              activeTab={currentTab}
              onChange={onTabChange}
              className="w-fit"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
            isActive={isFilterBarOpen || activeFiltersCount > 0}
            icon="filter_list"
          >
            <span>{t('employees.filters.label')}</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </Button>

          <Button icon="swap_vert">{t('employees.sort')}</Button>

          <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>

          <Button variant="ghost" size="icon" icon="view_column" />
        </div>
      </div>
      {/* Dynamic Filter Bar - Compact Multi-select Redesign */}
      {isFilterBarOpen && (
        <div className="mt-4 p-1.5 bg-neutral-100/50 dark:bg-white/[0.02] border border-border-light dark:border-white/5 rounded-md flex flex-wrap items-center gap-2 animate-slide-up">

          {/* Department Filter */}
          <Dropdown
            position="bottom-left"
            closeOnSelect={false}
            trigger={({ isOpen }) => (
              <FilterChip
                label={t('employees.filters.department')}
                values={filters.department || []}
                icon="corporate_fare"
                isOpen={isOpen}
                onClear={() => filters.department?.forEach(v => onFilterChange('department', v))}
              />
            )}
            sections={[{
              items: ['Engineering', 'Design', 'Product', 'HR', 'Marketing', 'Sales'].map(dept => ({
                id: dept,
                label: dept,
                onClick: () => onFilterChange('department', dept),
                isActive: filters.department?.includes(dept)
              }))
            }]}
          />

          {/* Manager Filter */}
          <Dropdown
            position="bottom-left"
            closeOnSelect={false}
            trigger={({ isOpen }) => (
              <FilterChip
                label={t('employees.filters.manager')}
                values={filters.manager || []}
                icon="person"
                isOpen={isOpen}
                onClear={() => filters.manager?.forEach(v => onFilterChange('manager', v))}
              />
            )}
            sections={[{
              items: ['Michael Chen', 'Alex Rivera', 'Sarah Jenkins', 'David Miller', 'Emma Wilson'].map(mgr => ({
                id: mgr,
                label: mgr,
                icon: 'person',
                onClick: () => onFilterChange('manager', mgr),
                isActive: filters.manager?.includes(mgr)
              }))
            }]}
          />

          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="px-3 h-8 text-[11px] font-bold text-neutral-400 hover:text-red-500 transition-all uppercase tracking-widest flex items-center gap-1.5 hover:bg-white dark:hover:bg-white/5 rounded-md active:scale-95"
            >
              <span className="material-symbols-outlined !text-[16px]">filter_alt_off</span>
              <span>{t('employees.filters.reset')}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

interface FilterChipProps {
  label: string;
  values: string[];
  icon: string;
  isOpen?: boolean;
  onClear: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, values, icon, isOpen, onClear }) => {
  const isActive = values.length > 0;

  return (
    <div className={`
      h-8 flex items-center gap-2 px-2.5 rounded-md border transition-all cursor-pointer group
      ${isActive || isOpen
        ? 'border-primary-600 text-primary bg-primary/[0.04] shadow-sm shadow-primary/5'
        : 'bg-transparent border-transparent text-neutral-500 dark:text-neutral-400 hover:text-primary hover:bg-primary/[0.01]'}
    `}>
      <span className="material-symbols-outlined !text-[16px] opacity-70">{icon}</span>
      <span className="text-[12px] font-normal whitespace-nowrap">
        {isActive ? (
          <>
            {values[0]}
            {values.length > 1 && <span className="ml-1 opacity-70">+{values.length - 1}</span>}
          </>
        ) : label}
      </span>
      {isActive && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="material-symbols-outlined !text-[14px] hover:bg-primary/20 rounded-full transition-colors p-0.5 ml-1"
        >
          close
        </span>
      )}
      {!isActive && (
        <span className="material-symbols-outlined !text-[16px] opacity-40 group-hover:opacity-70 transition-opacity">expand_more</span>
      )}
    </div>
  );
};
