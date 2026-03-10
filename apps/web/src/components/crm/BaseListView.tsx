import React, { useMemo, useState } from 'react';
import { ModulePageLayout } from '../../layouts/CRM/ModulePageLayout';
import { BreadcrumbItem } from './Header';
import { ModuleMenuBase } from './ModuleMenuBase';
import { Button } from '../ui/Button';
import { Dropdown } from '../ui/Dropdown';
import { TabItem } from '../ui/Tabs';

type ViewMode = 'table' | 'grid';
type Align = 'left' | 'center' | 'right';

export interface BaseListField<T> {
  key: keyof T | string;
  label: string;
  align?: Align;
  widthClassName?: string;
  sortable?: boolean;
  sortKey?: string;
  hideInCard?: boolean;
  cardLabel?: string;
  renderTableCell?: (item: T) => React.ReactNode;
  renderCardValue?: (item: T) => React.ReactNode;
}

export interface BaseListAction {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  onClick: () => void;
  className?: string;
}

interface BaseListViewProps<T extends object> {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: BaseListAction[];
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  searchPlaceholder: string;
  searchValue?: string;
  onSearch: (query: string) => void;
  fields: BaseListField<T>[];
  data: T[];
  getRowKey: (item: T, index: number) => string;
  isLoading?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  onSort?: (field: string) => void;
  filterCount?: number;
  filterContent?: React.ReactNode;
  filterButtonLabel?: string;
  tableViewLabel?: string;
  gridViewLabel?: string;
  tableShortLabel?: string;
  gridShortLabel?: string;
  pagination?: React.ReactNode;
  emptyStateText?: string;
  emptyStateIcon?: string;
  defaultViewMode?: ViewMode;
  onRowActions?: (item: T) => React.ReactNode;
  cardTitle?: (item: T) => React.ReactNode;
  cardSubtitle?: (item: T) => React.ReactNode;
  children?: React.ReactNode;
}

const resolveValue = <T extends object>(item: T, key: keyof T | string) => {
  const path = String(key).split('.');
  let current: unknown = item;

  for (const segment of path) {
    if (current == null || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }

  return current;
};

const formatDefaultValue = (value: unknown): React.ReactNode => {
  if (value === null || value === undefined || value === '') {
    return <span className="opacity-40">--</span>;
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return String(value);
};

const getAlignClass = (align: Align = 'left') => {
  if (align === 'center') {
    return 'text-center';
  }
  if (align === 'right') {
    return 'text-right';
  }
  return 'text-left';
};

export const BaseListView = <T extends object>({
  title,
  subtitle,
  breadcrumbs,
  actions = [],
  tabs,
  activeTab,
  onTabChange,
  searchPlaceholder,
  searchValue,
  onSearch,
  fields,
  data,
  getRowKey,
  isLoading = false,
  sortBy,
  sortOrder = 'asc',
  onSort,
  filterCount = 0,
  filterContent,
  filterButtonLabel = 'Filters',
  tableViewLabel = 'Table view',
  gridViewLabel = 'Grid view',
  tableShortLabel = 'Table',
  gridShortLabel = 'Grid',
  pagination,
  emptyStateText = 'No data found',
  emptyStateIcon = 'person_search',
  defaultViewMode = 'table',
  onRowActions,
  cardTitle,
  cardSubtitle,
  children,
}: BaseListViewProps<T>) => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const hasFilter = Boolean(filterContent);
  const showFilterButton = hasFilter || filterCount > 0;
  const hasRowActions = Boolean(onRowActions);
  const hasData = data.length > 0;
  const showEmptyState = !hasData && !isLoading;

  const cardFields = useMemo(
    () => fields.filter((field) => !field.hideInCard).slice(0, 6),
    [fields],
  );

  const actionsSlot = actions.length > 0 ? (
    <>
      {actions.map((action) => (
        <Button
          key={action.label}
          icon={action.icon}
          variant={action.variant ?? 'outline'}
          onClick={action.onClick}
          className={action.className ?? ''}
        >
          {action.label}
        </Button>
      ))}
    </>
  ) : undefined;

  return (
    <ModulePageLayout
      title={title}
      subtitle={subtitle}
      breadcrumbs={breadcrumbs}
      actions={actionsSlot}
      toolbar={(
        <ModuleMenuBase
          searchPlaceholder={searchPlaceholder}
          searchValue={searchValue}
          onSearch={onSearch}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
          tabsClassName="w-full"
          rightSection={(
            <>
              {showFilterButton && (
                <Button
                  onClick={() => setIsFilterBarOpen((prev) => !prev)}
                  isActive={isFilterBarOpen || filterCount > 0}
                  icon="filter_list"
                >
                  <span>{filterButtonLabel}</span>
                  {filterCount > 0 && (
                    <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] flex items-center justify-center">
                      {filterCount}
                    </span>
                  )}
                </Button>
              )}

              <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>

              <Dropdown
                position="bottom-right"
                sections={[{
                  items: [
                    {
                      id: 'table',
                      label: tableViewLabel,
                      icon: 'table_rows',
                      isActive: viewMode === 'table',
                      onClick: () => setViewMode('table'),
                    },
                    {
                      id: 'grid',
                      label: gridViewLabel,
                      icon: 'grid_view',
                      isActive: viewMode === 'grid',
                      onClick: () => setViewMode('grid'),
                    },
                  ],
                }]}
                trigger={({ isOpen }) => (
                  <Button
                    variant="ghost"
                    isActive={isOpen}
                    icon={viewMode === 'grid' ? 'grid_view' : 'table_rows'}
                    className="px-3"
                  >
                    <span className="text-[12px] font-semibold hidden md:inline">
                      {viewMode === 'grid' ? gridShortLabel : tableShortLabel}
                    </span>
                    <span
                      className={`material-symbols-outlined !text-[16px] opacity-60 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      expand_more
                    </span>
                  </Button>
                )}
              />
            </>
          )}
        />
      )}
      filterBar={hasFilter ? (
        <div
          aria-hidden={!isFilterBarOpen}
          className={`
            transition-[max-height,opacity,transform,margin] duration-[420ms] ease-[var(--ease-apple)]
            ${isFilterBarOpen
              ? 'mt-2 max-h-[520px] opacity-100 translate-y-0 overflow-visible'
              : 'mt-0 max-h-0 opacity-0 -translate-y-1 pointer-events-none overflow-hidden'}
            relative z-40
          `}
        >
          <div className="p-1.5 bg-neutral-50 dark:bg-white/[0.02] border border-border-light dark:border-white/5 rounded-xl shadow-[0_12px_30px_-24px_rgba(24,24,27,0.55)] flex flex-wrap items-center gap-2">
            {filterContent}
          </div>
        </div>
      ) : undefined}
      pagination={pagination}
    >
      <div className="flex-1 flex flex-col min-h-0 min-w-0 animate-slide-up bg-white dark:bg-transparent overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-white/40 dark:bg-black/20 backdrop-blur-[2px] flex items-center justify-center transition-all">
            <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="flex-1 min-h-0 px-8 pt-2 pb-6 flex flex-col overflow-hidden">
          {viewMode === 'table' ? (
            hasData ? (
              <div className="h-fit max-h-full border border-border-light dark:border-white/5 rounded-md overflow-auto custom-scrollbar hide-scrollbar-x bg-white/40 dark:bg-white/[0.02]">
                <table className="w-full border-separate border-spacing-0 table-fixed min-w-[1200px]">
                  <thead>
                    <tr>
                      {fields.map((field) => {
                        const isSortable = Boolean(field.sortable && onSort);
                        const fieldSortKey = field.sortKey ?? String(field.key);
                        const isActiveSort = sortBy === fieldSortKey;

                        return (
                          <th
                            key={String(field.key)}
                            onClick={isSortable ? () => onSort?.(fieldSortKey) : undefined}
                            className={`
                              sticky top-0 z-20 border-r border-b border-neutral-300 dark:border-white/20 px-4 py-3.5
                              text-[11px] font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400
                              bg-neutral-50 dark:bg-neutral-900 transition-all select-none bg-clip-padding
                              ${field.widthClassName ?? ''}
                              ${getAlignClass(field.align)}
                              ${isSortable ? 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-white/5 group' : ''}
                            `}
                          >
                            <div className={`flex items-center gap-1.5 ${field.align === 'center' ? 'justify-center' : field.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                              <span className={`${isSortable && isActiveSort ? 'text-primary' : ''}`}>
                                {field.label}
                              </span>
                              {isSortable && (
                                <div className="flex flex-col -gap-1">
                                  <span className={`material-symbols-outlined !text-[12px] h-2 leading-none ${isActiveSort && sortOrder === 'asc' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} transition-colors`}>
                                    arrow_drop_up
                                  </span>
                                  <span className={`material-symbols-outlined !text-[12px] h-2 leading-none ${isActiveSort && sortOrder === 'desc' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} transition-colors`}>
                                    arrow_drop_down
                                  </span>
                                </div>
                              )}
                            </div>
                          </th>
                        );
                      })}

                      {hasRowActions && (
                        <th className="sticky top-0 z-20 border-b border-neutral-300 dark:border-white/20 px-4 py-3.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-50 dark:bg-neutral-900 w-24 text-center transition-colors bg-clip-padding">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-neutral-600 dark:text-neutral-400">
                    {data.map((item, index) => (
                      <tr
                        key={getRowKey(item, index)}
                        className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                      >
                        {fields.map((field) => {
                          const rawValue = resolveValue(item, field.key);
                          const tableValue = field.renderTableCell ? field.renderTableCell(item) : formatDefaultValue(rawValue);
                          return (
                            <td key={`${getRowKey(item, index)}-${String(field.key)}`} className={`grid-cell py-4 ${getAlignClass(field.align)}`}>
                              {tableValue}
                            </td>
                          );
                        })}

                        {hasRowActions && (
                          <td className="grid-cell text-center py-4">
                            {onRowActions?.(item)}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : showEmptyState ? (
              <EmptyState text={emptyStateText} icon={emptyStateIcon} />
            ) : null
          ) : (
            hasData ? (
              <div className="h-fit max-h-full overflow-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {data.map((item, index) => {
                    const titleContent = cardTitle ? cardTitle(item) : formatDefaultValue(resolveValue(item, fields[0]?.key));
                    const subtitleContent = cardSubtitle ? cardSubtitle(item) : (fields[1] ? formatDefaultValue(resolveValue(item, fields[1].key)) : null);

                    return (
                      <article
                        key={`card-${getRowKey(item, index)}`}
                        className="group rounded-xl border border-border-light dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all animate-fade-in"
                        style={{ animationDelay: `${index * 0.04}s`, animationFillMode: 'both' }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[14px] font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                              {titleContent}
                            </p>
                            {subtitleContent && (
                              <div className="text-[11px] text-neutral-500 mt-1 truncate">
                                {subtitleContent}
                              </div>
                            )}
                          </div>
                          {hasRowActions && (
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {onRowActions?.(item)}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
                          {cardFields.map((field) => {
                            const rawValue = resolveValue(item, field.key);
                            const cardValue = field.renderCardValue ? field.renderCardValue(item) : formatDefaultValue(rawValue);

                            return (
                              <div key={`card-field-${getRowKey(item, index)}-${String(field.key)}`} className="rounded-lg bg-neutral-100/70 dark:bg-white/[0.03] px-2.5 py-2">
                                <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                                  {field.cardLabel ?? field.label}
                                </p>
                                <div className="mt-1 text-neutral-700 dark:text-neutral-200 truncate">
                                  {cardValue}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : showEmptyState ? (
              <EmptyState text={emptyStateText} icon={emptyStateIcon} />
            ) : null
          )}
        </div>
      </div>
      {children}
    </ModulePageLayout>
  );
};

const EmptyState: React.FC<{ text: string; icon: string }> = ({ text, icon }) => (
  <div className="min-h-[360px] border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl bg-neutral-50/50 dark:bg-white/[0.01] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4 text-neutral-400">
      <span className="material-symbols-outlined !text-[64px] opacity-20">{icon}</span>
      <p className="text-[14px] font-medium">{text}</p>
    </div>
  </div>
);
