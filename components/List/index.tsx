import { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
}

const List = ({ children }: ListProps) => (
  <ul className="divide-y">{children}</ul>
);

export default List;
