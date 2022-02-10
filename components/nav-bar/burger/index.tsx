import React, { useState, useRef, ReactElement } from 'react';
import RightNav from './right-nav';
import { Overlay, StyledBurger } from './styles';
import { useOnClickOutside } from '../../../utils/hooks';
import { ListDropDownProp } from '../../../models/drop-down';

const Burger = ({
  dropDownContent,
}: ListDropDownProp): ReactElement<ListDropDownProp> => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setIsOpen(false));

  return (
    <>
      <div ref={node}>
        <StyledBurger onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas fa-bars `} />
        </StyledBurger>
        <RightNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropDownContent={dropDownContent}
        />
        <Overlay isOpen={isOpen} />
      </div>
    </>
  );
};

export default Burger;
