import React, { ReactElement } from 'react';
import { CloseMobileMenu, MobileNav } from './styles';
import DropDown from '../../drop-down';

interface RightNavProps {
  isOpen: boolean;
  setIsOpen: (n: boolean) => void;
  dropDownContent: any;
}

const RightNav = ({
  isOpen,
  setIsOpen,
  dropDownContent,
}: RightNavProps): ReactElement<any> => {
  return (
    <MobileNav isOpen={isOpen}>
      <CloseMobileMenu onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas fa-times `} />
      </CloseMobileMenu>
      <ul>
        {dropDownContent.map((item: any) => (
          <DropDown
            key={item.id}
            id={item.id}
            url={item.url}
            label={item.label}
            page={item.page}
            items={item.items}
          />
        ))}
      </ul>
    </MobileNav>
  );
};

export default RightNav;
