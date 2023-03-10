import { ReactNode } from 'react';
import { FiHome, FiUser } from 'react-icons/fi';
import { Permission } from 'src/redux/auth/types';
import appConfig from '.';
import { PATHS } from './paths';

export const isActive = (href: string) => {
  return window.location.pathname === href;
};
type MenuType = {
  title: string;
  icon: ReactNode;
  subMenu?: { title: string; href: string }[];
  href?: string;
  permissions: Permission[];
};

export const SidebarMenu: MenuType[] = [
  {
    title: 'Dashboard',
    icon: <FiHome className="has-text-black" />,
    href: `${PATHS.dashboard}`,
    permissions: appConfig.DASHBOARD_PERMISSION,
  },
  {
    title: 'User Management',
    icon: <FiUser className="has-text-black" />,
    href: `${PATHS.myProfile}`,
    permissions: appConfig.DASHBOARD_PERMISSION,
  },
];
