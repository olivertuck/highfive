import { ReactNode } from 'react';

interface ListItemProps {
  avatar?: ReactNode;
  title: string;
  subtitle: string;
  action?: ReactNode;
}

const ListItem = ({ avatar, title, subtitle, action }: ListItemProps) => (
  <li className="flex items-center justify-between py-2 first:pt-0 last:pb-0">
    <div className="flex items-start space-x-2">
      {avatar}
      <div>
        <div className="text-sm font-semibold text-gray-800">{title}</div>
        <div className="text-sm">{subtitle}</div>
      </div>
    </div>
    {action}
  </li>
);

export default ListItem;
