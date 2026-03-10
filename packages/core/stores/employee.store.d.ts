import { Employee } from "services";
interface TabPaginationState {
    page: number;
    totalPages: number;
    totalItems: number;
}
export declare class EmployeeStore {
    employees: Employee[];
    isLoading: boolean;
    error: string | null;
    searchQuery: string;
    currentTab: string;
    pageSize: number;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    filterOptions: Record<string, string[]>;
    isModalOpen: boolean;
    editingEmployee: Employee | null;
    private paginationMap;
    private requestId;
    constructor();
    get activeFiltersCount(): number;
    get currentPagination(): TabPaginationState;
    get currentPage(): number;
    initializeTabs(tabIds: string[]): void;
    setSearchQuery(query: string): void;
    setCurrentTab(tabId: string): void;
    setPage(page: number): void;
    setPageSize(size: number): void;
    setSort(field: string): void;
    toggleFilter(field: string, value: string): void;
    clearFilters(): void;
    openCreateModal(): void;
    openEditModal(employee: Employee): void;
    closeModal(): void;
    saveEmployee(data: Partial<Employee>): Promise<void>;
    deleteEmployee(id: string): Promise<void>;
    importEmployees(): void;
    exportEmployees(): void;
    fetchEmployees(): Promise<void>;
}
export {};
