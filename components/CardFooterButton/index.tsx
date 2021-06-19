import { ReactNode } from 'react';

interface CardFooterButtonProps {
  icon: ReactNode;
  children: ReactNode;
}

const CardFooterButton = ({ icon, children }: CardFooterButtonProps) => (
  <button className="flex items-center p-3 space-x-1" type="button">
    {icon}
    <span className="text-sm font-semibold">{children}</span>
  </button>
);

export default CardFooterButton;
