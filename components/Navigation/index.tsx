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
            <li key={item.title}>
              <Link href={item.href}>
                <a
                  className={classNames(
                    'flex items-center justify-between px-3 py-2 rounded-full group',
                    {
                      'hover:bg-gray-50': !isCurrentPath,
                      'text-white bg-primary-600': isCurrentPath,
                    }
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={classNames({
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
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={classNames(
                      'py-0.5 px-1.5 text-xs font-semibold rounded-full',
                      {
                        'bg-gray-100 group-hover:bg-gray-200': !isCurrentPath,
                        'bg-white text-primary-600': isCurrentPath,
                      }
                    )}
                  >
                    {item.count}
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
