import React from 'react';
import { Header } from '../../components/crm/Header';
import { Sidebar } from '../../components/crm/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout là bộ khung chuẩn của hệ thống CRM.
 * Sidebar bên trái cố định, Header phía trên cố định.
 * Phần Content (children) sẽ tự động thay đổi dựa trên Route.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-light dark:bg-bg-dark text-neutral-900 dark:text-neutral-300 antialiased selection:bg-primary/20 transition-colors duration-200">
      {/* 1. Sidebar bên trái - Cố định */}
      <Sidebar />

      {/* 2. Vùng contents bên phải */}
      <div className="flex-1 flex flex-col min-w-0 bg-surface-light dark:bg-surface-dark overflow-hidden">
        {/* Header phía trên - Cố định cho mỗi module */}
        <Header />

        {/* 3. Vùng chứa nội dung module - Module handles its own scrolling */}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
