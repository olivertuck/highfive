import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => (
  <button
    className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
    type="button"
  >
    {children}
  </button>
);

export default IconButton;
