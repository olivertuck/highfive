import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="border sm:rounded-lg">{children}</div>
);

export default Card;
