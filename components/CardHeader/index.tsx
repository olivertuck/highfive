import { ReactNode } from 'react';
import classNames from 'classnames';

interface CardHeaderProps {
  children: ReactNode;
  action?: ReactNode;
}

const CardHeader = ({ children, action }: CardHeaderProps) => (
  <div
    className={classNames('relative pt-3 pl-3', {
      'pr-3': !action,
      'pr-10': action,
    })}
  >
    {children}
    {action && <div className="absolute top-1 right-1">{action}</div>}
  </div>
);

export default CardHeader;
