import React, { useCallback, useEffect, useState } from 'react';
import { EmployeeGrid } from '../../components/crm/EmployeeGrid';
import { EmployeeListHeader } from '../../components/crm/EmployeeListHeader';
import { EmployeeModal } from '../../components/crm/EmployeeModal';
import { Pagination } from '../../components/crm/Pagination';
import { Employee, EmployeeService } from '../../services/employee.service';

interface TabPagination {
  page: number;
  totalPages: number;
  totalItems: number;
}

export const EmployeeScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('active');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<string>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>({});

  // Pagination state preserved per tab
  const [paginationMap, setPaginationMap] = useState<Record<string, TabPagination>>({
    active: { page: 1, totalPages: 1, totalItems: 0 },
    'on-leave': { page: 1, totalPages: 1, totalItems: 0 },
    all: { page: 1, totalPages: 1, totalItems: 0 },
    locked: { page: 1, totalPages: 1, totalItems: 0 },
    archived: { page: 1, totalPages: 1, totalItems: 0 },
    'on-boarding': { page: 1, totalPages: 1, totalItems: 0 },
    interns: { page: 1, totalPages: 1, totalItems: 0 },
    remote: { page: 1, totalPages: 1, totalItems: 0 },
    office: { page: 1, totalPages: 1, totalItems: 0 },
    contractors: { page: 1, totalPages: 1, totalItems: 0 },
    probation: { page: 1, totalPages: 1, totalItems: 0 },
    management: { page: 1, totalPages: 1, totalItems: 0 },
  });

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    try {
      const currentPage = paginationMap[currentTab]?.page || 1;
      const response = await EmployeeService.getEmployees({
        search: searchQuery,
        status: currentTab,
        page: currentPage,
        pageSize: pageSize,
        sortBy: sortBy,
        sortOrder: sortOrder,
        filters: filterOptions
      });

      setEmployees(response.data);
      setPaginationMap(prev => ({
        ...prev,
        [currentTab]: {
          page: currentPage,
          totalPages: response.totalPages,
          totalItems: response.total
        }
      }));
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, currentTab, pageSize, paginationMap[currentTab]?.page, sortBy, sortOrder, filterOptions]);

  useEffect(() => {
    fetchEmployees();
  }, [searchQuery, currentTab, pageSize, paginationMap[currentTab]?.page, sortBy, sortOrder, filterOptions]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 }
    }));
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handlePageChange = (page: number) => {
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page }
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
      [currentTab]: { ...prev[currentTab], page: 1 }
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
        [field]: nextValues
      };
    });
    // Reset to page 1 on filter
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 }
    }));
  };

  const handleClearFilters = () => {
    setFilterOptions({});
    setPaginationMap(prev => ({
      ...prev,
      [currentTab]: { ...prev[currentTab], page: 1 }
    }));
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

  const currentPagination = paginationMap[currentTab] || { page: 1, totalPages: 1, totalItems: 0 };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <EmployeeListHeader
        onSearch={handleSearch}
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onAdd={handleAdd}
        filters={filterOptions}
        onFilterChange={handleMultiFilterChange}
        onClearFilters={handleClearFilters}
      />

      <EmployeeGrid
        employees={employees}
        isLoading={isLoading}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPagination.page}
        totalPages={currentPagination.totalPages}
        totalItems={currentPagination.totalItems}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />

      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingEmployee={editingEmployee}
      />
    </div>
  );
};
