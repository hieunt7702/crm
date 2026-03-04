import { TFunction } from 'i18next';
import { TabItem } from '../../components/ui/Tabs';

interface EmployeeTabDefinition {
  id: string;
  labelKey: string;
  icon: string;
}

const EMPLOYEE_TAB_DEFINITIONS: EmployeeTabDefinition[] = [
  { id: 'active', labelKey: 'employees.tabs.active', icon: 'check_circle' },
  { id: 'on-leave', labelKey: 'employees.tabs.on_leave', icon: 'hotel' },
  { id: 'all', labelKey: 'employees.tabs.all', icon: 'group' },
  { id: 'locked', labelKey: 'employees.tabs.locked', icon: 'lock' },
  { id: 'archived', labelKey: 'employees.tabs.archived', icon: 'archive' },
  { id: 'on-boarding', labelKey: 'employees.tabs.on_boarding', icon: 'hail' },
  { id: 'interns', labelKey: 'employees.tabs.interns', icon: 'school' },
  { id: 'remote', labelKey: 'employees.tabs.remote', icon: 'home_work' },
  { id: 'office', labelKey: 'employees.tabs.office', icon: 'apartment' },
  { id: 'contractors', labelKey: 'employees.tabs.contractors', icon: 'contact_page' },
  { id: 'probation', labelKey: 'employees.tabs.probation', icon: 'timer' },
  { id: 'management', labelKey: 'employees.tabs.management', icon: 'admin_panel_settings' },
];

export const EMPLOYEE_TAB_IDS = EMPLOYEE_TAB_DEFINITIONS.map((tab) => tab.id);

export const getEmployeeTabs = (t: TFunction): TabItem[] =>
  EMPLOYEE_TAB_DEFINITIONS.map((tab) => ({
    id: tab.id,
    label: t(tab.labelKey),
    icon: tab.icon,
  }));
