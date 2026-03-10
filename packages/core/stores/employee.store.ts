import { makeAutoObservable, reaction, runInAction } from "mobx";
import { Employee, EmployeeService } from "services";

interface TabPaginationState {
  page: number;
  totalPages: number;
  totalItems: number;
}

export class EmployeeStore {
  employees: Employee[] = [];
  isLoading = false;
  error: string | null = null;

  searchQuery = '';
  currentTab = 'active';
  pageSize = 10;
  sortBy: string = 'id';
  sortOrder: 'asc' | 'desc' = 'asc';
  filterOptions: Record<string, string[]> = {};

  isModalOpen = false;
  editingEmployee: Employee | null = null;

  private paginationMap: Record<string, TabPaginationState> = {
    active: { page: 1, totalPages: 1, totalItems: 0 },
  };
  private requestId = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(
      () => ({
        searchQuery: this.searchQuery,
        currentTab: this.currentTab,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
        filters: JSON.stringify(this.filterOptions),
      }),
      () => {
        void this.fetchEmployees();
      },
      { fireImmediately: true },
    );
  }

  get activeFiltersCount() {
    return Object.values(this.filterOptions).flat().length;
  }

  get currentPagination(): TabPaginationState {
    return this.paginationMap[this.currentTab] ?? { page: 1, totalPages: 1, totalItems: 0 };
  }

  get currentPage() {
    return this.paginationMap[this.currentTab]?.page ?? 1;
  }

  initializeTabs(tabIds: string[]) {
    const nextMap = { ...this.paginationMap };
    tabIds.forEach((tabId) => {
      nextMap[tabId] = nextMap[tabId] ?? { page: 1, totalPages: 1, totalItems: 0 };
    });
    this.paginationMap = nextMap;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.paginationMap[this.currentTab] = {
      ...this.currentPagination,
      page: 1,
    };
  }

  setCurrentTab(tabId: string) {
    this.currentTab = tabId;
    this.paginationMap[tabId] = this.paginationMap[tabId] ?? { page: 1, totalPages: 1, totalItems: 0 };
  }

  setPage(page: number) {
    this.paginationMap[this.currentTab] = {
      ...this.currentPagination,
      page,
    };
  }

  setPageSize(size: number) {
    this.pageSize = size;

    const nextMap = { ...this.paginationMap };
    Object.keys(nextMap).forEach((key) => {
      nextMap[key] = { ...nextMap[key], page: 1 };
    });
    this.paginationMap = nextMap;
  }

  setSort(field: string) {
    if (this.sortBy === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortOrder = 'asc';
    }

    this.paginationMap[this.currentTab] = {
      ...this.currentPagination,
      page: 1,
    };
  }

  toggleFilter(field: string, value: string) {
    const currentValues = this.filterOptions[field] || [];
    const nextValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    this.filterOptions = {
      ...this.filterOptions,
      [field]: nextValues,
    };

    this.paginationMap[this.currentTab] = {
      ...this.currentPagination,
      page: 1,
    };
  }

  clearFilters() {
    this.filterOptions = {};
    this.paginationMap[this.currentTab] = {
      ...this.currentPagination,
      page: 1,
    };
  }

  openCreateModal() {
    this.editingEmployee = null;
    this.isModalOpen = true;
  }

  openEditModal(employee: Employee) {
    this.editingEmployee = employee;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  async saveEmployee(data: Partial<Employee>) {
    console.log('Saving employee:', data);
    this.isModalOpen = false;
    await this.fetchEmployees();
  }

  async deleteEmployee(id: string) {
    console.log('Deleting employee:', id);
    await this.fetchEmployees();
  }

  importEmployees() {
    console.log('Import clicked');
  }

  exportEmployees() {
    console.log('Export clicked');
  }

  async fetchEmployees() {
    const currentRequestId = ++this.requestId;
    this.isLoading = true;
    this.error = null;

    try {
      const response = await EmployeeService.getEmployees({
        search: this.searchQuery,
        status: this.currentTab,
        page: this.currentPage,
        pageSize: this.pageSize,
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
        filters: this.filterOptions,
      });

      if (currentRequestId !== this.requestId) {
        return;
      }

      runInAction(() => {
        this.employees = response.data;
        this.paginationMap[this.currentTab] = {
          page: this.currentPage,
          totalPages: response.totalPages,
          totalItems: response.total,
        };
      });
    } catch (error) {
      if (currentRequestId !== this.requestId) {
        return;
      }

      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Failed to fetch employees';
      });
    } finally {
      if (currentRequestId === this.requestId) {
        runInAction(() => {
          this.isLoading = false;
        });
      }
    }
  }
}
