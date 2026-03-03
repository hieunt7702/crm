import React from 'react';
import { Dropdown, DropdownSection } from '../ui/Dropdown';

export const Header: React.FC = () => {
  const BRANCH_SESSIONS: DropdownSection[] = [
    {
      items: [
        { id: 'hq', label: 'Headquarters', icon: 'domain', isActive: true },
        { id: 'london', label: 'London Office', icon: 'location_on' },
        { id: 'singapore', label: 'Singapore Hub', icon: 'location_on' },
        { id: 'sf', label: 'San Francisco', icon: 'location_on' },
      ],
      hasDivider: true
    },
    {
      items: [
        { id: 'add-branch', label: 'Add New Branch', icon: 'add_location' }
      ]
    }
  ];

  const USER_MENU: DropdownSection[] = [
    {
      items: [
        { id: 'profile', label: 'My Profile', icon: 'person' },
        { id: 'settings', label: 'Account Settings', icon: 'settings', isActive: true },
        { id: 'pref', label: 'Preferences', icon: 'tune' },
      ],
      hasDivider: true
    },
    {
      items: [
        { id: 'logout', label: 'Log out', icon: 'logout', variant: 'danger' }
      ]
    }
  ];

  return (
    <header className="h-12 border-b border-border-light dark:border-border-dark flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark shrink-0 relative">
      {/* Premium Breadcrumbs */}
      <div className="flex items-center gap-2">
        <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
          <button className="flex items-center justify-center size-7 rounded-md hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors text-neutral-400 hover:text-primary active:scale-95">
            <span className="material-symbols-outlined !text-[18px]">home</span>
          </button>

          <span className="text-neutral-300 dark:text-neutral-700 font-light select-none">/</span>

          <button className="px-2.5 py-1 rounded-md text-[12px] font-bold text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all active:scale-95 tracking-tight">
            Employees
          </button>

          <span className="text-neutral-300 dark:text-neutral-700 font-light select-none">/</span>

          <div className="px-2.5 py-1 rounded-md bg-primary/[0.03] border border-primary/10 text-[12px] font-bold text-primary dark:text-primary-400 tracking-tight shadow-sm">
            Staff List
          </div>
        </nav>
      </div>

      {/* Right Side Tools - Better Spacing */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          {/* Branch Selector */}
          <Dropdown
            position="bottom-right"
            sections={BRANCH_SESSIONS}
            trigger={({ isOpen }) => (
              <div className={`
                flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg cursor-pointer transition-all border
                ${isOpen
                  ? 'bg-primary/5 border-primary/30 text-primary shadow-sm'
                  : 'bg-neutral-50 dark:bg-white/[0.02] hover:bg-neutral-100 dark:hover:bg-white/5 border-border-light dark:border-white/5 text-neutral-600 dark:text-neutral-300'}
                active:scale-[0.985]
              `}>
                <span className="material-symbols-outlined !text-[18px] opacity-70">corporate_fare</span>
                <span className="text-[12px] font-bold tracking-tight">Headquarters</span>
                <span className={`material-symbols-outlined !text-[16px] opacity-40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </div>
            )}
          />

          {/* Activity Status / Notification Dot - Decorative */}
          <div className="relative size-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all active:scale-95">
            <span className="material-symbols-outlined !text-[20px]">notifications</span>
            <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-surface-dark animate-pulse"></span>
          </div>
        </div>

        <div className="h-6 w-[1px] bg-border-light dark:bg-white/5 mx-1"></div>

        {/* User Profile Menu */}
        <Dropdown
          position="bottom-right"
          sections={USER_MENU}
          trigger={({ isOpen }) => (
            <div className={`
              flex items-center gap-3.5 cursor-pointer pl-3.5 pr-1.5 py-1 rounded-xl transition-all border
              ${isOpen
                ? 'bg-primary/5 border-primary/30 ring-4 ring-primary/5'
                : 'bg-transparent border-transparent hover:bg-neutral-100 dark:hover:bg-white/5 hover:border-border-light dark:hover:border-white/10'}
              active:scale-[0.985] group
            `}>
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-bold text-neutral-900 dark:text-white leading-tight mb-0.5">Alex Rivera</p>
                <div className="flex items-center justify-end gap-1.5">
                  <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Administrator</p>
                </div>
              </div>
              <div className="size-8.5 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 shadow-lg ring-1 ring-neutral-200 dark:ring-white/10 group-hover:ring-primary/40 transition-all relative">
                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJKKIwnQvOcY81dAw28a8U8ha-ZX-muYiDa0g_UjfEnbj4ZaL-eYwQ6xNbsk2c2bwIC-SBXW8fhkMc3-Po79kaZIW9wrxoaGFw0t45zOzrrs2tvLP4bSfSOaOTqkk8koAwNtxhEOQAxNA9xBYowUKpO91ishqneGl9Jq5xBdIhSrOwGkkRoDBx0SXg1YQX7N5Z8kCOBf6TRcRUnpizl-gGta8SYbQ3RLBGnqznNP5ycqXsf8A2yswseJpgQpLn9nudVvw7hHUPHMI" />
                {isOpen && <div className="absolute inset-0 bg-primary/10 transition-opacity"></div>}
              </div>
            </div>
          )}
        />
      </div>
    </header>
  );
};

