import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => (
  <button
    className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-50"
    type="button"
  >
    {children}
  </button>
);

export default IconButton;
