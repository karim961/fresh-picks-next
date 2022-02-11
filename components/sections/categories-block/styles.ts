import styled from 'styled-components';
import { H1 } from '../../../styles/text';
import { StyledHeaderDescription } from '../../common/header-description/styles';

export const CategoriesBlockContainer = styled.div`
  padding: 125px 0;
  background: ${(props) => props.theme.colors.white};
  & ${StyledHeaderDescription} {
    text-align: center;
    position: relative;
    margin-bottom: 75px;
    & h1 {
      margin-top: 21px;
      padding-bottom: 20px;
    }
    &:after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 30%;
      right: 30%;
      height: 5px;
      border-radius: 10px;
      background: ${(props) => props.theme.colors.accent};
    }
  }
`;

export const BlockTitle = styled(H1)`
  text-align: center;
`;
