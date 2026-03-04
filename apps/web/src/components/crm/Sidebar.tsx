import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownSection } from '../ui/Dropdown';

interface MenuItem {
  id: string;
  icon: string;
  labelKey: string;
  path: string;
}

const TOP_MENU: MenuItem[] = [
  { id: 'search', icon: 'search', labelKey: 'sidebar.search', path: '/search' },
  { id: 'inbox', icon: 'inbox', labelKey: 'sidebar.inbox', path: '/inbox' },
  { id: 'my-issues', icon: 'task_alt', labelKey: 'sidebar.my_issues', path: '/tasks/mine' },
];

const MODULE_MENU: MenuItem[] = [
  { id: 'employees', icon: 'group', labelKey: 'sidebar.staff_list', path: '/employees' },
  { id: 'products', icon: 'inventory_2', labelKey: 'sidebar.products', path: '/products' },
  { id: 'users', icon: 'person', labelKey: 'sidebar.user_master', path: '/user' },
];

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const SETTINGS_DROPDOWN: DropdownSection[] = [
    {
      label: t('settings.appearance'),
      items: [
        {
          id: 'dark-mode',
          label: t('settings.toggle_dark_mode'),
          icon: 'contrast',
          onClick: () => document.documentElement.classList.toggle('dark')
        }
      ],
      hasDivider: true
    },
    {
      label: 'Language / Ngôn ngữ',
      items: [
        {
          id: 'lang-vi',
          label: 'Tiếng Việt',
          icon: 'language',
          isActive: i18n.language === 'vi',
          onClick: () => changeLanguage('vi')
        },
        {
          id: 'lang-en',
          label: 'English',
          icon: 'language',
          isActive: i18n.language === 'en',
          onClick: () => changeLanguage('en')
        }
      ],
      hasDivider: true
    },
    {
      label: t('sidebar.workspace'),
      items: [
        { id: 'ws-settings', label: t('settings.workspace_settings'), icon: 'workspaces', isActive: true },
        { id: 'members', label: t('settings.members'), icon: 'group' },
        { id: 'integrations', label: t('settings.integrations'), icon: 'bolt' },
      ],
      hasDivider: true
    },
    {
      items: [
        { id: 'plans', label: t('settings.plans'), icon: 'credit_card' },
        { id: 'logout', label: t('settings.logout'), icon: 'logout', variant: 'danger' }
      ]
    }
  ];

  return (
    <aside
      className={`relative h-screen flex flex-col shrink-0 bg-bg-light dark:bg-sidebar-dark border-r border-border-light dark:border-border-dark transition-[width] duration-[450ms] cubic-bezier(0.25, 1, 0.5, 1) group/sidebar ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Toggle button - floating at the end of sidebar */}
      <div
        className="absolute -right-3 top-5 size-6 bg-surface-light dark:bg-neutral-800 border border-border-light dark:border-white/10 rounded-full flex items-center justify-center cursor-pointer shadow-sm z-50 opacity-0 group-hover/sidebar:opacity-100 transition-all hover:border-primary/50 hover:text-primary active:scale-90"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className={`material-symbols-outlined !text-[16px] transition-transform duration-300 ${!isCollapsed ? 'rotate-180' : ''}`}>
          chevron_right
        </span>
      </div>

      {/* Logo Section */}
      <div className="p-4 flex items-center h-14 overflow-hidden">
        <div className="flex items-center gap-3 shrink-0">
          <div className="size-6 bg-primary rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0">L</div>
          <div className={`transition-all duration-300 flex items-center overflow-hidden ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
            <span className="text-[13px] font-bold tracking-tight text-neutral-900 dark:text-neutral-200 whitespace-nowrap">
              Linear CRM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 space-y-1 pt-2 overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className="space-y-0.5">
          {TOP_MENU.map((item) => (
            <SidebarItem key={item.id} item={item} isCollapsed={isCollapsed} />
          ))}
        </div>

        <div className="pt-6">
          <div className={`flex items-center gap-3 px-2 py-1.5 min-h-[32px] overflow-hidden`}>
            <span className="material-symbols-outlined !text-[18px] text-neutral-400 w-6 flex justify-center shrink-0">badge</span>
            <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 whitespace-nowrap">{t('sidebar.workspace')}</span>
            </div>
          </div>
          <div className="mt-1 space-y-0.5">
            {MODULE_MENU.map((item) => (
              <SidebarItem key={item.id} item={item} isCollapsed={isCollapsed} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Settings Trigger */}
      <div className="px-3 py-4 mt-auto">
        <Dropdown
          position="top-left"
          sections={SETTINGS_DROPDOWN}
          trigger={({ isOpen }) => (
            <div className={`
              flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-200 h-10 cursor-pointer
              ${isOpen
                ? 'bg-primary/10 text-primary dark:text-primary-400'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-primary/[0.03]'}
              active:scale-[0.985]
            `}>
              <span className="material-symbols-outlined !text-[20px] w-6 flex justify-center shrink-0">settings</span>
              <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
                <span className="text-[13px] whitespace-nowrap font-semibold">{t('sidebar.settings')}</span>
              </div>
            </div>
          )}
        />
      </div>
    </aside>
  );
};



interface SidebarItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isCollapsed }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => `
        flex items-center gap-3 px-2 py-2 text-[13px] rounded-lg transition-all duration-200 h-10 overflow-hidden
        ${isActive
          ? 'text-primary dark:text-primary-300 font-semibold bg-primary/10'
          : 'text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-primary/[0.03]'}
        active:scale-[0.97]
      `}
    >
      <span className="material-symbols-outlined !text-[20px] w-6 flex justify-center shrink-0 transition-all duration-300">
        {item.icon}
      </span>
      <div className={`transition-all duration-300 ease-in-out flex items-center overflow-hidden ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
        <span className="truncate whitespace-nowrap">{t(item.labelKey)}</span>
      </div>
    </NavLink>
  );
};



