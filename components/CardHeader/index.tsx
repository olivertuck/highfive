import { ReactNode } from 'react';

interface CardHeaderProps {
  children: ReactNode;
  action?: ReactNode;
}

const CardHeader = ({ children, action }: CardHeaderProps) => (
  <div className="relative pt-3 pl-3 pr-3">
    {children}
    {action && <div className="absolute top-0 right-0">{action}</div>}
  </div>
);

export default CardHeader;
