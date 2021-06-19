import { ReactNode } from 'react';

interface CardFooterButtonProps {
  icon: ReactNode;
  children: ReactNode;
}

const CardFooterButton = ({ icon, children }: CardFooterButtonProps) => (
  <button
    className="flex items-center justify-center w-1/2 py-0.5 space-x-1"
    type="button"
  >
    {icon}
    <span className="text-sm font-semibold">{children}</span>
  </button>
);

export default CardFooterButton;
