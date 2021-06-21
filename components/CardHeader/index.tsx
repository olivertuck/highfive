import { ReactNode } from 'react';
import classNames from 'classnames';

interface CardHeaderProps {
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
}

const CardHeader = ({
  title,
  subtitle,
  icon,
  children,
  action,
}: CardHeaderProps) => (
  <div
    className={classNames('relative pt-3 pl-3', {
      'pr-3': !action,
      'pr-10': action,
    })}
  >
    {title && (
      <div className="flex items-start justify-between">
        <h2>{title}</h2>
        {icon}
      </div>
    )}
    {children}
    {action && <div className="absolute top-1 right-1">{action}</div>}
  </div>
);

export default CardHeader;
