import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';
import { StyledHeaderDescription } from '../../common/header-description/styles';

export const PartnersBlockContainer = styled(SectionContainer)`
  padding: 30px 0 100px;
  background: ${(props) => props.theme.colors.white};
  & ${StyledHeaderDescription} {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
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

export const PartnerImageWrapper = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 100%;
  }
`;
