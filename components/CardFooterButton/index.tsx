import { ReactNode } from 'react';
import classNames from 'classnames';

interface CardFooterButtonProps {
  active?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  width?: '1/2' | '1/4';
  onClick?: () => void;
}

const CardFooterButton = ({
  active = false,
  icon,
  children,
  width = '1/2',
  onClick,
}: CardFooterButtonProps) => (
  <button
    className={classNames('flex items-center justify-center py-0.5 space-x-1', {
      'text-primary-600': active,
      'w-1/2': width === '1/2',
      'w-1/4': width === '1/4',
    })}
    type="button"
    onClick={onClick}
  >
    {icon}
    <span className="text-sm font-semibold">{children}</span>
  </button>
);

export default CardFooterButton;
