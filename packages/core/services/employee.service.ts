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

const MOCK_EMPLOYEES: Employee[] = [
  { id: '01', name: 'Sarah Jenkins', status: 'active', onlineStatus: 'online', department: 'Engineering, DevOps', manager: 'Michael Chen', joinDate: 'Mar 12, 2022', capacity: 92, isPro: true },
  { id: '02', name: 'David Miller', status: 'locked', onlineStatus: 'offline', department: 'Design, Brand', manager: 'Michael Chen', joinDate: 'Jan 05, 2023', capacity: 45 },
  { id: '03', name: 'Emma Wilson', status: 'active', onlineStatus: 'online', department: 'Product Management', manager: 'Alex Rivera', joinDate: 'Nov 18, 2021', capacity: 78, isPro: true },
  { id: '04', name: 'James Thompson', status: 'active', onlineStatus: 'online', department: 'Sales, Growth', manager: 'Alex Rivera', joinDate: 'May 20, 2023', capacity: 62 },
  { id: '05', name: 'Maria Garcia', status: 'locked', onlineStatus: 'offline', department: 'Marketing, Social', manager: 'Michael Chen', joinDate: 'Feb 14, 2022', capacity: 35 },
  { id: '06', name: 'Robert Chen', status: 'active', onlineStatus: 'online', department: 'Engineering, Frontend', manager: 'Sarah Jenkins', joinDate: 'Jun 10, 2023', capacity: 88, isPro: true },
  { id: '07', name: 'Lisa Wang', status: 'active', onlineStatus: 'online', department: 'Engineering, Backend', manager: 'Sarah Jenkins', joinDate: 'Jul 15, 2023', capacity: 72 },
  { id: '08', name: 'Kevin Adams', status: 'archived', onlineStatus: 'offline', department: 'Design, UI/UX', manager: 'David Miller', joinDate: 'Sep 02, 2023', capacity: 55 },
  { id: '09', name: 'Anna Baker', status: 'active', onlineStatus: 'online', department: 'HR, Talent', manager: 'Alex Rivera', joinDate: 'Oct 12, 2023', capacity: 40 },
  { id: '10', name: 'Chris Evans', status: 'active', onlineStatus: 'online', department: 'Engineering, Mobile', manager: 'Sarah Jenkins', joinDate: 'Nov 25, 2023', capacity: 95, isPro: true },
  { id: '11', name: 'Michael Chen', status: 'active', onlineStatus: 'online', department: 'Engineering Management', manager: 'Alex Rivera', joinDate: 'Jan 10, 2021', capacity: 98, isPro: true },
  { id: '12', name: 'Sophie Taylor', status: 'active', onlineStatus: 'online', department: 'Marketing, Content', manager: 'Maria Garcia', joinDate: 'Aug 22, 2023', capacity: 65 },
  { id: '13', name: 'Daniel Kim', status: 'locked', onlineStatus: 'offline', department: 'Engineering, Security', manager: 'Michael Chen', joinDate: 'Dec 05, 2022', capacity: 50 },
  { id: '14', name: 'Olivia Wright', status: 'active', onlineStatus: 'online', department: 'Design, Research', manager: 'David Miller', joinDate: 'Apr 14, 2023', capacity: 75, isPro: true },
  { id: '15', name: 'William Clark', status: 'active', onlineStatus: 'online', department: 'Product, Growth', manager: 'Emma Wilson', joinDate: 'Sep 30, 2022', capacity: 82 },
];

export const EmployeeService = {
  getEmployees: async (params: {
    search?: string;
    status?: string;
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    filters?: Record<string, string[]>;
  }) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    let data = [...MOCK_EMPLOYEES];

    if (params.status && params.status !== 'all') {
      data = data.filter(e => e.status === params.status);
    }

    if (params.filters) {
      Object.entries(params.filters).forEach(([key, values]) => {
        if (values && Array.isArray(values) && values.length > 0) {
          data = data.filter(e => {
            const fieldVal = (e as unknown as Record<string, unknown>)[key]?.toString().toLowerCase();
            return values.some(v => fieldVal?.includes(v.toLowerCase()));
          });
        }
      });
    }

    if (params.search) {
      const query = params.search.toLowerCase();
      data = data.filter(e =>
        e.name.toLowerCase().includes(query) ||
        e.department.toLowerCase().includes(query) ||
        e.manager.toLowerCase().includes(query)
      );
    }

    if (params.sortBy) {
      const field = params.sortBy as keyof Employee;
      const order = params.sortOrder === 'desc' ? -1 : 1;

      data.sort((a, b) => {
        const valA = a[field];
        const valB = b[field];

        if (typeof valA === 'string' && typeof valB === 'string') {
          return valA.localeCompare(valB) * order;
        }

        if (typeof valA === 'number' && typeof valB === 'number') {
          return (valA - valB) * order;
        }

        return 0;
      });
    }

    const total = data.length;
    const page = params.page || 1;
    const pageSize = params.pageSize || 10;
    const start = (page - 1) * pageSize;
    const paginatedData = data.slice(start, start + pageSize);

    return {
      data: paginatedData,
      total,
      page,
      totalPages: Math.ceil(total / pageSize),
    };
  },
};
