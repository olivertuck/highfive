import { ReactNode } from 'react';
import classNames from 'classnames';

interface BadgeProps {
  color: 'green';
  children: ReactNode;
}

const Badge = ({ color, children }: BadgeProps) => (
  <span
    className={classNames(
      'inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold',
      {
        'bg-green-100 text-green-800': color === 'green',
      }
    )}
  >
    {children}
  </span>
);

export default Badge;
