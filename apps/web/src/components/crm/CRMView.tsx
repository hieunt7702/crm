import React from 'react';
import { EmployeeGrid } from './EmployeeGrid';
import { EmployeeListHeader } from './EmployeeListHeader';
import { Header } from './Header';
import { Pagination } from './Pagination';
import { Sidebar } from './Sidebar';

export const CRMView: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-light dark:bg-bg-dark text-neutral-900 dark:text-neutral-300 antialiased selection:bg-primary/20 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-surface-light dark:bg-surface-dark overflow-hidden">
        <Header />
        <EmployeeListHeader />
        <EmployeeGrid />
        <Pagination />
      </main>
    </div>
  );
};
