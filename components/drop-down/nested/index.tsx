import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { NestedUL, NestedWrapper } from './styles';
import { NestedProps } from '../../../models/drop-down';

const Nested = ({ items, children }: NestedProps): ReactElement<any> => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <NestedWrapper onClick={handleClick} className={isActive ? 'active' : ''}>
      {children}
      <NestedUL>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.url ? item.url : '/'}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </NestedUL>
    </NestedWrapper>
  );
};

export default Nested;
