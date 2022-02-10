import { Col } from 'react-styled-flexboxgrid';
import DropDown from '../drop-down';
import Burger from './burger';
import { NavBarWrapper } from './styles';
import { ReactElement } from 'react';
import { ListDropDownProp } from '../../models/drop-down';

const NavBar = ({
  dropDownContent,
}: ListDropDownProp): ReactElement<ListDropDownProp> => (
  <NavBarWrapper>
    <Col xs={false} sm={false} md={12} lg={12}>
      <ul>
        {dropDownContent.map((item) => (
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
    </Col>
    <Col xs sm md={false} lg={false}>
      <Burger dropDownContent={dropDownContent} />
    </Col>
  </NavBarWrapper>
);

export default NavBar;
