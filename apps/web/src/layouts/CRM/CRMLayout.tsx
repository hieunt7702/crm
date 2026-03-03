import React from 'react';
import { Header } from '../../components/crm/Header';
import { Sidebar } from '../../components/crm/Sidebar';

interface CRMLayoutProps {
  children: React.ReactNode;
}

export const CRMLayout: React.FC<CRMLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-light dark:bg-bg-dark text-neutral-900 dark:text-neutral-300 antialiased selection:bg-primary/20 transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-surface-light dark:bg-surface-dark overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
};
