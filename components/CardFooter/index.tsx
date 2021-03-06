import { ReactNode } from 'react';

interface CardFooterProps {
  children: ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => (
  <div className="px-3">
    <div className="border-t">
      <div className="flex py-2 divide-x">{children}</div>
    </div>
  </div>
);

export default CardFooter;
