import { ReactNode } from 'react';

interface NavigationItem {
  name: string;
  icon: ReactNode;
  href: string;
  count: number;
}

export default NavigationItem;
