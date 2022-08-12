import styled from 'styled-components';
import { Container } from '../styles';
import { H3 } from '../../../../styles/text';

export const SimpleBannerContainer = styled(Container)`
  max-height: 575px;
`;

export const PageName = styled(H3)`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.snow};

  @media (max-width: ${(props) => props.theme.flexboxgrid.breakpoints.md}rem) {
    font-size: 3rem;
    text-align: center;
  }
`;
