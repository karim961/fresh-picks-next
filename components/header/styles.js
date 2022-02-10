import styled from 'styled-components';
import { H5 } from '../../styles/text';
import { Col, Row } from 'react-styled-flexboxgrid';

export const RightCol = styled(Col)`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 18px;
  padding-top: 30px;

  @media (max-width: ${(props) => props.theme.flexboxgrid.breakpoints.md}rem) {
    & ${Row} {
      align-items: center;
    }
  }
`;
export const Logo = styled.img`
  max-width: 100%;
  width: 110px;
`;

export const IconWrapper = styled.span`
  transform: rotate(45deg);
  color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  width: 35px;
  height: 35px;
  font-size: 18px;
  float: left;
  margin-right: 11px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & i {
    transform: rotate(-45deg);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 5px 15px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.flexboxgrid.breakpoints.md}rem) {
    display: none;
  }
  & ${H5} {
    margin-top: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const InfoDetails = styled.div`
  flex-basis: auto;
  margin-left: 5px;
  & p {
    margin: 10px 0;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  margin-right: -1.5rem;
  justify-content: flex-end;
  flex-wrap: wrap;
  & ${InfoContainer}:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  }

  & a,
  & p {
    margin: 10px 0;
    display: inline-block;
    color: ${(props) => props.theme.colors.primaryText};
  }
`;
