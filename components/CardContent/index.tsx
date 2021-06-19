import { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
}

const CardContent = ({ children }: CardContentProps) => (
  <div className="relative p-3">{children}</div>
);

export default CardContent;
