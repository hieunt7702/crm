import { useStore } from '@app/core/context';
import type { Employee } from '@app/core/services';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseListField, BaseListView } from '../../components/crm/BaseListView';
import { EmployeeModal } from '../../components/crm/EmployeeModal';
import { Pagination } from '../../components/crm/Pagination';
import { Dropdown } from '../../components/ui/Dropdown';
import { EMPLOYEE_TAB_IDS, getEmployeeTabs } from './employeeTabs.base';

export const EmployeeScreen: React.FC = observer(() => {
  const { t } = useTranslation();
  const { employeeStore } = useStore();

  useEffect(() => {
    employeeStore.initializeTabs(EMPLOYEE_TAB_IDS);
  }, [employeeStore]);

  const fields = useMemo<BaseListField<Employee>[]>(() => ([
    {
      key: 'id',
      label: 'ID',
      widthClassName: 'w-16',
      align: 'center',
      sortable: true,
      renderTableCell: (employee) => (
        <span className="text-neutral-500 font-mono text-[11px]">{employee.id}</span>
      ),
    },
    {
      key: 'name',
      label: 'Name',
      widthClassName: 'w-64',
      sortable: true,
      renderTableCell: (employee) => (
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
            <span className="material-symbols-outlined !text-[16px] text-primary">person</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-medium text-neutral-900 dark:text-neutral-200 truncate">{employee.name}</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${employee.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' :
                employee.status === 'locked' ? 'bg-red-500/10 text-red-500' : 'bg-neutral-500/10 text-neutral-500'
                }`}>
                {employee.status}
              </span>
              {employee.isPro && (
                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-amber-500/10 text-amber-500 uppercase tracking-widest">PRO</span>
              )}
            </div>
          </div>
        </div>
      ),
      renderCardValue: (employee) => employee.name,
    },
    {
      key: 'status',
      label: 'Status',
      widthClassName: 'w-24',
      align: 'center',
      sortable: true,
      renderTableCell: (employee) => (
        <div className="flex justify-center">
          <div
            className={`size-2.5 rounded-full ring-4 transition-all ${employee.onlineStatus === 'online' ? 'bg-emerald-500 ring-emerald-500/20' : 'bg-neutral-400 ring-neutral-400/10'}`}
            title={employee.onlineStatus}
          ></div>
        </div>
      ),
      renderCardValue: (employee) => (
        <div className="flex items-center gap-1.5">
          <div className={`size-1.5 rounded-full ${employee.status === 'active' ? 'bg-emerald-500' :
            employee.status === 'locked' ? 'bg-red-500' : 'bg-neutral-400'
            }`} />
          <span className={`text-[10px] font-bold uppercase tracking-[0.05em] ${employee.status === 'active' ? 'text-emerald-600 dark:text-emerald-400' :
            employee.status === 'locked' ? 'text-red-600 dark:text-red-400' : 'text-neutral-500'
            }`}>
            {employee.status}
          </span>
        </div>
      ),
    },
    {
      key: 'department',
      label: 'Department',
      widthClassName: 'w-52',
      sortable: true,
      renderTableCell: (employee) => (
        <span className="text-neutral-500 font-normal truncate block">{employee.department}</span>
      ),
    },
    {
      key: 'manager',
      label: 'Manager',
      widthClassName: 'w-40',
      sortable: true,
      align: 'center',
      renderTableCell: (employee) => (
        <div className="flex justify-center items-center gap-2">
          <div className="size-6 rounded-full bg-neutral-700 overflow-hidden ring-2 ring-border-light dark:ring-border-dark shrink-0">
            <div className="bg-primary-700 w-full h-full flex items-center justify-center text-[10px] text-white font-bold">
              {employee.manager.charAt(0)}
            </div>
          </div>
          <span className="truncate text-[12px] text-neutral-600 dark:text-neutral-300">{employee.manager}</span>
        </div>
      ),
    },
    {
      key: 'joinDate',
      label: 'Join Date',
      widthClassName: 'w-40',
      sortable: true,
      renderTableCell: (employee) => (
        <span className="text-neutral-500 font-normal whitespace-nowrap">{employee.joinDate}</span>
      ),
    },
    {
      key: 'capacity',
      label: 'Capacity',
      widthClassName: 'w-56',
      sortable: true,
      renderTableCell: (employee) => (
        <div className="flex items-center gap-3 pr-4">
          <div className="flex-1 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out ${employee.capacity > 80 ? 'bg-emerald-500' : employee.capacity > 40 ? 'bg-blue-500' : 'bg-amber-500'}`}
              style={{ width: `${employee.capacity}%` }}
            ></div>
          </div>
          <span className="text-[12px] font-semibold text-neutral-500 w-9 text-right pr-2">{employee.capacity}%</span>
        </div>
      ),
      renderCardValue: (employee) => `${employee.capacity}%`,
    },
  ]), []);

  const filterContent = (
    <>
      <Dropdown
        position="bottom-left"
        closeOnSelect={false}
        searchable
        searchPlaceholder="Search department..."
        trigger={({ isOpen }) => (
          <FilterChip
            label={t('employees.filters.department')}
            values={employeeStore.filterOptions.department || []}
            icon="corporate_fare"
            isOpen={isOpen}
            onClear={() => employeeStore.filterOptions.department?.forEach(v => employeeStore.toggleFilter('department', v))}
          />
        )}
        sections={[{
          items: ['Engineering', 'Design', 'Product', 'HR', 'Marketing', 'Sales'].map(dept => ({
            id: dept,
            label: dept,
            onClick: () => employeeStore.toggleFilter('department', dept),
            isActive: employeeStore.filterOptions.department?.includes(dept)
          }))
        }]}
      />

      <Dropdown
        position="bottom-left"
        closeOnSelect={false}
        searchable
        searchPlaceholder="Search manager..."
        trigger={({ isOpen }) => (
          <FilterChip
            label={t('employees.filters.manager')}
            values={employeeStore.filterOptions.manager || []}
            icon="person"
            isOpen={isOpen}
            onClear={() => employeeStore.filterOptions.manager?.forEach(v => employeeStore.toggleFilter('manager', v))}
          />
        )}
        sections={[{
          items: ['Michael Chen', 'Alex Rivera', 'Sarah Jenkins', 'David Miller', 'Emma Wilson'].map(mgr => ({
            id: mgr,
            label: mgr,
            icon: 'person',
            onClick: () => employeeStore.toggleFilter('manager', mgr),
            isActive: employeeStore.filterOptions.manager?.includes(mgr)
          }))
        }]}
      />

      {employeeStore.activeFiltersCount > 0 && (
        <button
          onClick={employeeStore.clearFilters}
          className="px-3 h-8 text-[11px] font-bold text-neutral-400 hover:text-red-500 transition-all uppercase tracking-widest flex items-center gap-1.5 hover:bg-white dark:hover:bg-white/5 rounded-lg active:scale-95"
        >
          <span className="material-symbols-outlined !text-[16px]">filter_alt_off</span>
          <span>{t('employees.filters.reset')}</span>
        </button>
      )}
    </>
  );

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      await employeeStore.deleteEmployee(id);
    }
  };

  const handleViewDetails = (employee: Employee) => {
    window.alert(`Employee: ${employee.name}\nID: ${employee.id}\nDepartment: ${employee.department}`);
  };

  return (
    <BaseListView<Employee>
      title={t('employees.title')}
      subtitle={t('employees.subtitle')}
      breadcrumbs={[
        { label: 'Employees', icon: 'group' },
        { label: 'Staff List', icon: 'format_list_bulleted', isActive: true }
      ]}
      actions={[
        { label: t('employees.import'), icon: 'file_upload', onClick: employeeStore.importEmployees },
        { label: t('employees.export'), icon: 'file_download', onClick: employeeStore.exportEmployees },
        { label: t('employees.add_employee'), icon: 'person_add', variant: 'primary', onClick: employeeStore.openCreateModal, className: 'px-5' },
      ]}
      tabs={getEmployeeTabs(t)}
      activeTab={employeeStore.currentTab}
      onTabChange={employeeStore.setCurrentTab}
      searchPlaceholder={t('employees.search_placeholder')}
      searchValue={employeeStore.searchQuery}
      onSearch={employeeStore.setSearchQuery}
      fields={fields}
      data={employeeStore.employees}
      getRowKey={(employee) => employee.id}
      isLoading={employeeStore.isLoading}
      sortBy={employeeStore.sortBy}
      sortOrder={employeeStore.sortOrder}
      onSort={employeeStore.setSort}
      filterCount={employeeStore.activeFiltersCount}
      filterContent={filterContent}
      filterButtonLabel={t('employees.filters.label')}
      emptyStateText="No members found"
      emptyStateIcon="group"
      cardTitle={(employee) => employee.name}
      cardSubtitle={(employee) => employee.id}
      onRowActions={(employee) => (
        <Dropdown
          position="bottom-right"
          className="inline-flex z-[60]"
          sections={[
            {
              items: [
                {
                  id: `detail-${employee.id}`,
                  label: 'Mở chi tiết',
                  icon: 'visibility',
                  onClick: () => handleViewDetails(employee),
                },
                {
                  id: `edit-${employee.id}`,
                  label: 'Chỉnh sửa',
                  icon: 'edit',
                  onClick: () => employeeStore.openEditModal(employee),
                },
              ],
              hasDivider: true,
            },
            {
              items: [
                {
                  id: `delete-${employee.id}`,
                  label: 'Xóa',
                  icon: 'delete',
                  variant: 'danger',
                  onClick: () => {
                    void handleDelete(employee.id);
                  },
                },
              ],
            },
          ]}
          trigger={({ isOpen }) => (
            <button
              type="button"
              className={`
                size-8 rounded-lg cursor-pointer
                transition-[background-color,color,border-color,transform] duration-200 ease-[var(--ease-apple)]
                ${isOpen
                  ? 'bg-primary/10 text-primary dark:text-primary-400'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-primary/[0.03]'}
                active:scale-[0.985]
              `}
            >
              <span className="material-symbols-outlined !text-[18px]">more_horiz</span>
            </button>
          )}
        />
      )}
      pagination={(
        <Pagination
          currentPage={employeeStore.currentPagination.page}
          totalPages={employeeStore.currentPagination.totalPages}
          totalItems={employeeStore.currentPagination.totalItems}
          pageSize={employeeStore.pageSize}
          onPageChange={employeeStore.setPage}
          onPageSizeChange={employeeStore.setPageSize}
        />
      )}
    >
      <EmployeeModal
        isOpen={employeeStore.isModalOpen}
        onClose={employeeStore.closeModal}
        onSave={employeeStore.saveEmployee}
        editingEmployee={employeeStore.editingEmployee}
      />
    </BaseListView>
  );
});

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
