import React from 'react';
import { Employee } from '../../services/employee.service';

interface EmployeeGridProps {
  employees: Employee[];
  isLoading: boolean;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  viewMode: 'table' | 'grid';
  onSort: (field: string) => void;
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

export const EmployeeGrid: React.FC<EmployeeGridProps> = ({
  employees,
  isLoading,
  sortBy,
  sortOrder,
  viewMode,
  onSort,
  onEdit,
  onDelete
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 min-w-0 animate-slide-up bg-white dark:bg-transparent overflow-hidden relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-white/40 dark:bg-black/20 backdrop-blur-[2px] flex items-center justify-center transition-all">
          <div className="size-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="flex-1 min-h-0 px-8 pt-2 pb-6 flex flex-col overflow-hidden">
        {viewMode === 'table' ? (
          <div className="h-fit max-h-full border border-border-light dark:border-white/5 rounded-md overflow-auto custom-scrollbar hide-scrollbar-x bg-white/40 dark:bg-white/[0.02]">
            <table className="w-full border-separate border-spacing-0 table-fixed min-w-[1200px]">
              <thead>
                <tr>
                  <th className="sticky top-0 z-20 border-r border-b border-neutral-300 dark:border-white/20 px-4 py-3.5 bg-neutral-50 dark:bg-neutral-900 w-12 text-center transition-colors bg-clip-padding">
                    <input className="rounded border-neutral-300 dark:border-neutral-700 bg-transparent text-primary focus:ring-primary/20 size-3.5 transition-all" type="checkbox" />
                  </th>

                  <HeaderCell
                    className="w-16"
                    label="ID"
                    field="id"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                  />

                  <HeaderCell
                    className="w-56"
                    label="NAME"
                    field="name"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                    align="left"
                  />

                  <HeaderCell
                    className="w-24"
                    label="STATUS"
                    field="status"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                  />

                  <HeaderCell
                    className="w-48"
                    label="DEPARTMENT"
                    field="department"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                    align="left"
                  />

                  <HeaderCell
                    className="w-32"
                    label="MANAGER"
                    field="manager"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                  />

                  <HeaderCell
                    className="w-36"
                    label="JOIN DATE"
                    field="joinDate"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                    align="left"
                  />

                  <HeaderCell
                    className="w-56"
                    label="CAPACITY"
                    field="capacity"
                    currentSort={sortBy}
                    order={sortOrder}
                    onClick={onSort}
                    align="left"
                  />

                  <th className="sticky top-0 z-20 border-b border-neutral-300 dark:border-white/20 px-4 py-3.5 text-[11px] font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-50 dark:bg-neutral-900 w-24 text-center transition-colors bg-clip-padding">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-0 text-neutral-600 dark:text-neutral-400">
                {employees.length > 0 ? (
                  employees.map((emp, index) => (
                    <EmployeeRow
                      key={emp.id}
                      employee={emp}
                      index={index}
                      onEdit={() => onEdit(emp)}
                      onDelete={() => onDelete(emp.id)}
                    />
                  ))
                ) : !isLoading && (
                  <tr>
                    <td colSpan={9} className="py-20 text-center">
                      <EmptyMembersState />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-fit max-h-full overflow-auto custom-scrollbar">
            {employees.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {employees.map((emp, index) => (
                  <EmployeeCard
                    key={emp.id}
                    employee={emp}
                    index={index}
                    onEdit={() => onEdit(emp)}
                    onDelete={() => onDelete(emp.id)}
                  />
                ))}
              </div>
            ) : !isLoading && (
              <div className="min-h-[360px] border border-border-light dark:border-white/5 rounded-xl bg-white/30 dark:bg-white/[0.01] flex items-center justify-center">
                <EmptyMembersState />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const EmptyMembersState: React.FC = () => (
  <div className="flex flex-col items-center gap-3 opacity-40">
    <span className="material-symbols-outlined !text-[48px]">person_search</span>
    <p className="text-[14px] font-medium">No members found</p>
  </div>
);

interface HeaderCellProps {
  label: string;
  field: string;
  currentSort: string;
  order: 'asc' | 'desc';
  onClick: (field: string) => void;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const HeaderCell: React.FC<HeaderCellProps> = ({
  label,
  field,
  currentSort,
  order,
  onClick,
  className = "",
  align = 'center'
}) => {
  const isActive = currentSort === field;

  return (
    <th
      onClick={() => onClick(field)}
      className={`
        sticky top-0 z-20 border-r border-b border-neutral-300 dark:border-white/20 px-4 py-3.5 
        text-[11px] font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 
        bg-neutral-50 dark:bg-neutral-900 transition-all cursor-pointer select-none
        hover:bg-neutral-100 dark:hover:bg-white/5 group bg-clip-padding
        ${className}
      `}
    >
      <div className={`flex items-center gap-1.5 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span className={`${isActive ? 'text-primary' : 'group-hover:text-neutral-700 dark:group-hover:text-neutral-200'} transition-colors whitespace-nowrap`}>
          {label}
        </span>
        <div className="flex flex-col -gap-1">
          <span className={`material-symbols-outlined !text-[12px] h-2 leading-none ${isActive && order === 'asc' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} transition-colors`}>
            arrow_drop_up
          </span>
          <span className={`material-symbols-outlined !text-[12px] h-2 leading-none ${isActive && order === 'desc' ? 'text-primary' : 'text-neutral-300 dark:text-neutral-700'} transition-colors`}>
            arrow_drop_down
          </span>
        </div>
      </div>
    </th>
  );
};

const EmployeeRow: React.FC<{ employee: Employee; index: number; onEdit: () => void; onDelete: () => void }> = ({
  employee,
  index,
  onEdit,
  onDelete
}) => {
  return (
    <tr
      className="hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
    >
      <td className="grid-cell text-center py-4">
        <input className="rounded border-neutral-300 dark:border-neutral-700 bg-transparent text-primary focus:ring-primary/20 size-3.5 transition-all" type="checkbox" />
      </td>
      <td className="grid-cell text-center text-neutral-500 font-mono text-[11px] py-4">{employee.id}</td>
      <td className="grid-cell py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined !text-[16px] text-primary">person</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-medium text-neutral-900 dark:text-neutral-200 truncate group-hover:text-primary transition-colors">{employee.name}</span>
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
      </td>
      <td className="grid-cell text-center py-4">
        <div className="flex justify-center">
          <div
            className={`size-2.5 rounded-full ring-4 transition-all ${employee.onlineStatus === 'online' ? 'bg-emerald-500 ring-emerald-500/20' : 'bg-neutral-400 ring-neutral-400/10'}`}
            title={employee.onlineStatus}
          ></div>
        </div>
      </td>
      <td className="grid-cell text-neutral-500 font-normal truncate py-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">{employee.department}</td>
      <td className="grid-cell text-center py-4">
        <div className="flex justify-center">
          <div className="size-6 rounded-full bg-neutral-700 overflow-hidden ring-2 ring-border-light dark:ring-border-dark group-hover:ring-primary/40 transition-all shrink-0" title={employee.manager}>
            <div className="bg-primary-700 w-full h-full flex items-center justify-center text-[10px] text-white font-bold">
              {employee.manager.charAt(0)}
            </div>
          </div>
        </div>
      </td>
      <td className="grid-cell text-neutral-500 font-normal whitespace-nowrap py-4">{employee.joinDate}</td>
      <td className="grid-cell py-4">
        <div className="flex items-center gap-3 pr-4">
          <div className="flex-1 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-out ${employee.capacity > 80 ? 'bg-emerald-500' : employee.capacity > 40 ? 'bg-blue-500' : 'bg-amber-500'}`}
              style={{ width: `${employee.capacity}%` }}
            ></div>
          </div>
          <span className="text-[12px] font-semibold text-neutral-500 w-9 text-right pr-2">{employee.capacity}%</span>
        </div>
      </td>
      <td className="grid-cell text-center py-4">
        <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="p-1.5 hover:bg-white dark:hover:bg-white/10 rounded-md text-neutral-500 hover:text-primary transition-all active:scale-90">
            <span className="material-symbols-outlined !text-[18px]">edit</span>
          </button>
          <button onClick={onDelete} className="p-1.5 hover:bg-white dark:hover:bg-white/10 rounded-md text-neutral-400 hover:text-red-500 transition-all active:scale-90">
            <span className="material-symbols-outlined !text-[18px]">delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

const EmployeeCard: React.FC<{ employee: Employee; index: number; onEdit: () => void; onDelete: () => void }> = ({
  employee,
  index,
  onEdit,
  onDelete
}) => {
  return (
    <article
      className="group rounded-xl border border-border-light dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all animate-fade-in"
      style={{ animationDelay: `${index * 0.04}s`, animationFillMode: 'both' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
            <span className="material-symbols-outlined !text-[18px] text-primary">person</span>
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-neutral-900 dark:text-neutral-100 truncate">{employee.name}</p>
            <p className="text-[11px] text-neutral-500 font-mono mt-0.5">{employee.id}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="p-1.5 hover:bg-white dark:hover:bg-white/10 rounded-md text-neutral-500 hover:text-primary transition-all active:scale-90">
            <span className="material-symbols-outlined !text-[18px]">edit</span>
          </button>
          <button onClick={onDelete} className="p-1.5 hover:bg-white dark:hover:bg-white/10 rounded-md text-neutral-400 hover:text-red-500 transition-all active:scale-90">
            <span className="material-symbols-outlined !text-[18px]">delete</span>
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest ${employee.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' :
            employee.status === 'locked' ? 'bg-red-500/10 text-red-500' : 'bg-neutral-500/10 text-neutral-500'
            }`}>
            {employee.status}
          </span>
          {employee.isPro && (
            <span className="px-2 py-1 rounded text-[9px] font-bold bg-amber-500/10 text-amber-500 uppercase tracking-widest">PRO</span>
          )}
        </div>
        <div
          className={`size-2.5 rounded-full ring-4 ${employee.onlineStatus === 'online' ? 'bg-emerald-500 ring-emerald-500/20' : 'bg-neutral-400 ring-neutral-400/10'}`}
          title={employee.onlineStatus}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-[12px]">
        <div className="rounded-lg bg-neutral-100/70 dark:bg-white/[0.03] px-2.5 py-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Department</p>
          <p className="mt-1 text-neutral-700 dark:text-neutral-200 truncate">{employee.department}</p>
        </div>
        <div className="rounded-lg bg-neutral-100/70 dark:bg-white/[0.03] px-2.5 py-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Manager</p>
          <p className="mt-1 text-neutral-700 dark:text-neutral-200 truncate">{employee.manager}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-2">
          <span>Capacity</span>
          <span className="font-semibold">{employee.capacity}%</span>
        </div>
        <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ease-out ${employee.capacity > 80 ? 'bg-emerald-500' : employee.capacity > 40 ? 'bg-blue-500' : 'bg-amber-500'}`}
            style={{ width: `${employee.capacity}%` }}
          />
        </div>
      </div>

      <div className="mt-3 text-[11px] text-neutral-500">
        Joined: <span className="text-neutral-700 dark:text-neutral-300">{employee.joinDate}</span>
      </div>
    </article>
  );
};
