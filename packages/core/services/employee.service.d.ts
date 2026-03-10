export interface Employee {
    id: string;
    name: string;
    email?: string;
    role?: string;
    status: 'active' | 'locked' | 'archived';
    onlineStatus: 'online' | 'offline';
    department: string;
    manager: string;
    joinDate: string;
    startDate?: string;
    contractType?: 'Full-time' | 'Part-time' | 'Freelance';
    capacity: number;
    isPro?: boolean;
}
export declare const EmployeeService: {
    getEmployees: (params: {
        search?: string;
        status?: string;
        page?: number;
        pageSize?: number;
        sortBy?: string;
        sortOrder?: "asc" | "desc";
        filters?: Record<string, string[]>;
    }) => Promise<{
        data: Employee[];
        total: number;
        page: number;
        totalPages: number;
    }>;
};
