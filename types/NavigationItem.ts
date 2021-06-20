import { ReactNode } from 'react';

interface NavigationItem {
  title: string;
  icon: ReactNode;
  href: string;
  count: number;
}

export default NavigationItem;
