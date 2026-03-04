import React from 'react';
import { useTranslation } from 'react-i18next';
import { getEmployeeTabs } from '../../modules/Employee/employeeTabs.base';
import { Button } from '../ui/Button';
import { Dropdown } from '../ui/Dropdown';
import { ModuleMenuBase } from './ModuleMenuBase';

interface EmployeeListHeaderProps {
  onSearch: (query: string) => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
  onAdd: () => void;
  filters: Record<string, string[]>;
  onFilterChange: (field: string, value: string) => void;
  onClearFilters: () => void;
  isFilterBarOpen: boolean;
  onToggleFilterBar: () => void;
  renderType?: 'header' | 'toolbar' | 'filter' | 'all';
}

export const EmployeeListHeader: React.FC<EmployeeListHeaderProps> = ({
  onSearch,
  currentTab,
  onTabChange,
  onAdd,
  filters,
  onFilterChange,
  onClearFilters,
  isFilterBarOpen,
  onToggleFilterBar,
  renderType = 'all'
}) => {
  const { t } = useTranslation();
  const activeFiltersCount = Object.values(filters).flat().length;
  const showHeader = renderType === 'all' || renderType === 'header';
  const showToolbar = renderType === 'all' || renderType === 'toolbar';
  const showFilter = renderType === 'all' || renderType === 'filter';

  return (
    <>
      {/* Header Title & CTA Row */}
      {showHeader && (
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
      )}

      {/* Unified Toolbar Row */}
      {showToolbar && (
        <ModuleMenuBase
          searchPlaceholder={t('employees.search_placeholder')}
          onSearch={onSearch}
          tabs={getEmployeeTabs(t)}
          activeTab={currentTab}
          onTabChange={onTabChange}
          tabsClassName="w-full"
          rightSection={
            <>
              <Button
                onClick={onToggleFilterBar}
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

              <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>

              <Button variant="ghost" size="icon" icon="view_column" />
            </>
          }
        />
      )}

      {/* Dynamic Filter Bar */}
      {showFilter && isFilterBarOpen && (
        <div className="mt-4 p-1 bg-neutral-50 dark:bg-white/[0.01] border border-border-light dark:border-white/5 rounded-lg flex flex-wrap items-center gap-2 animate-slide-up">
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
              className="px-3 h-8 text-[11px] font-bold text-neutral-400 hover:text-red-500 transition-all uppercase tracking-widest flex items-center gap-1.5 hover:bg-white dark:hover:bg-white/5 rounded-lg active:scale-95"
            >
              <span className="material-symbols-outlined !text-[16px]">filter_alt_off</span>
              <span>{t('employees.filters.reset')}</span>
            </button>
          )}
        </div>
      )}
    </>
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
      h-8 flex items-center gap-2 px-2.5 rounded-lg border transition-all cursor-pointer group
      ${isActive || isOpen
        ? 'border-primary/50 text-primary bg-primary/[0.04]'
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
