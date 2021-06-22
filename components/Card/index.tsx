import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="bg-white shadow-sm sm:rounded-lg">{children}</div>
);

export default Card;
