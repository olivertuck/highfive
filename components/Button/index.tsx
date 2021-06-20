import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
}

const Button = ({ children, icon }: ButtonProps) => (
  <button
    className="inline-flex items-center px-4 py-2 space-x-2 text-white border border-transparent rounded-full whitespace-nowrap bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    type="button"
  >
    <span className="text-sm font-semibold">{children}</span>
    {icon}
  </button>
);

export default Button;
