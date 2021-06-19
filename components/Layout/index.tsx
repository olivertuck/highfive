import { ReactNode } from 'react';
import {
  IoHomeOutline,
  IoCalendarClearOutline,
  IoPieChartOutline,
  IoGiftOutline,
} from 'react-icons/io5';
import NavigationItem from 'types/NavigationItem';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

const NavigationItems: NavigationItem[] = [
  {
    name: 'Home',
    icon: <IoHomeOutline size={24} />,
    href: '/',
    count: 27,
  },
  {
    name: 'Events',
    icon: <IoCalendarClearOutline size={24} />,
    href: '/events',
    count: 12,
  },
  {
    name: 'Surveys',
    icon: <IoPieChartOutline size={24} />,
    href: '/surveys',
    count: 8,
  },
  {
    name: 'Rewards',
    icon: <IoGiftOutline size={24} />,
    href: '/rewards',
    count: 5,
  },
];

interface LayoutProps {
  main: ReactNode;
  aside: ReactNode;
}

const Layout = ({ main, aside }: LayoutProps) => (
  <>
    <Header />
    <div className="container px-0 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[256px,1fr,256px] gap-4 sm:gap-8 py-4 sm:py-8">
        <aside className="hidden lg:block">
          <Navigation items={NavigationItems} />
        </aside>
        <main>{main}</main>
        <aside>{aside}</aside>
      </div>
    </div>
  </>
);

export default Layout;
