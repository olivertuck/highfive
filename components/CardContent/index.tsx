import { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
}

const CardContent = ({ children }: CardContentProps) => (
  <div className="p-3 space-y-3">{children}</div>
);

export default CardContent;
