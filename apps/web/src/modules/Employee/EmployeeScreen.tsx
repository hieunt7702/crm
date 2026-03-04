import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EmployeeGrid } from '../../components/crm/EmployeeGrid';
import { EmployeeListHeader } from '../../components/crm/EmployeeListHeader';
import { EmployeeModal } from '../../components/crm/EmployeeModal';
import { Pagination } from '../../components/crm/Pagination';
import { Button } from '../../components/ui/Button';
import { ModulePageLayout } from '../../layouts/CRM/ModulePageLayout';
import { Employee, EmployeeService } from '../../services/employee.service';
import { EMPLOYEE_TAB_IDS } from './employeeTabs.base';
import {
  createTabPaginationMap,
  ensureTabPaginationState,
  TabPaginationState,
} from '../shared/tabPagination.base';

export const EmployeeScreen: React.FC = () => {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState(EMPLOYEE_TAB_IDS[0] ?? 'active');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<string>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>({});
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const [paginationMap, setPaginationMap] = useState<Record<string, TabPaginationState>>(() =>
    createTabPaginationMap(EMPLOYEE_TAB_IDS),
  );
  const currentPage = paginationMap[currentTab]?.page ?? 1;

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await EmployeeService.getEmployees({
        search: searchQuery,
        status: currentTab,
        page: currentPage,
        pageSize,
        sortBy,
        sortOrder,
        filters: filterOptions,
      });

      setEmployees(response.data);
      setPaginationMap(prev => ({
        ...prev,
        [currentTab]: {
          page: currentPage,
          totalPages: response.totalPages,
          totalItems: response.total,
        },
      }));
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentTab, filterOptions, pageSize, searchQuery, sortBy, sortOrder]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 },
    }));
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    setPaginationMap(prev => ensureTabPaginationState(prev, tab));
  };

  const handlePageChange = (page: number) => {
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page },
    }));
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    // Reset page to 1 on sort
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 },
    }));
  };

  const handleMultiFilterChange = (field: string, value: string) => {
    setFilterOptions(prev => {
      const currentValues = prev[field] || [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [field]: nextValues,
      };
    });
    // Reset to page 1 on filter
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 },
    }));
  };

  const handleClearFilters = () => {
    setFilterOptions({});
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 },
    }));
  };

  const handleToggleFilterBar = () => {
    setIsFilterBarOpen(prev => !prev);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    // Reset all tabs to page 1 when page size changes
    setPaginationMap(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(key => {
        next[key] = { ...next[key], page: 1 };
      });
      return next;
    });
  };

  const handleAdd = () => {
    setEditingEmployee(null);
    setIsModalOpen(true);
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleSave = async (data: Partial<Employee>) => {
    console.log('Saving employee:', data);
    setIsModalOpen(false);
    fetchEmployees();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      console.log('Deleting employee:', id);
      fetchEmployees();
    }
  };

  const currentPagination = paginationMap[currentTab] ?? { page: 1, totalPages: 1, totalItems: 0 };

  return (
    <ModulePageLayout
      title={t('employees.title')}
      subtitle={t('employees.subtitle')}
      breadcrumbs={[
        { label: 'Employees', icon: 'group' },
        { label: 'Staff List', icon: 'format_list_bulleted', isActive: true }
      ]}
      actions={
        <>
          <Button icon="file_upload">{t('employees.import')}</Button>
          <Button icon="file_download">{t('employees.export')}</Button>
          <Button
            variant="primary"
            icon="person_add"
            onClick={handleAdd}
            className="px-5"
          >
            {t('employees.add_employee')}
          </Button>
        </>
      }
      toolbar={
        <EmployeeListHeader
          onSearch={handleSearch}
          currentTab={currentTab}
          onTabChange={handleTabChange}
          onAdd={handleAdd}
          filters={filterOptions}
          onFilterChange={handleMultiFilterChange}
          onClearFilters={handleClearFilters}
          isFilterBarOpen={isFilterBarOpen}
          onToggleFilterBar={handleToggleFilterBar}
          renderType="toolbar"
        />
      }
      filterBar={
        <EmployeeListHeader
          onSearch={handleSearch}
          currentTab={currentTab}
          onTabChange={handleTabChange}
          onAdd={handleAdd}
          filters={filterOptions}
          onFilterChange={handleMultiFilterChange}
          onClearFilters={handleClearFilters}
          isFilterBarOpen={isFilterBarOpen}
          onToggleFilterBar={handleToggleFilterBar}
          renderType="filter"
        />
      }
      pagination={
        <Pagination
          currentPage={currentPagination.page}
          totalPages={currentPagination.totalPages}
          totalItems={currentPagination.totalItems}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      }
    >
      <EmployeeGrid
        employees={employees}
        isLoading={isLoading}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingEmployee={editingEmployee}
      />
    </ModulePageLayout>
  );
};
