import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import NavigationItem from 'types/NavigationItem';

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation = ({ items }: NavigationProps) => {
  const router = useRouter();

  return (
    <nav>
      <ul className="space-y-1">
        {items.map((item) => {
          const isCurrentPath = item.href === router.pathname;

          return (
            <li key={item.name}>
              <Link href={item.href}>
                <a
                  className={classNames('flex items-center px-3 py-2', {
                    'text-white rounded-full bg-primary-600': isCurrentPath,
                  })}
                >
                  <span
                    className={classNames('mr-3', {
                      'text-gray-500': !isCurrentPath,
                    })}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={classNames('text-sm font-semibold', {
                      'text-gray-800': !isCurrentPath,
                    })}
                  >
                    {item.name}
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
