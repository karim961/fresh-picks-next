import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';
import { H2, H6 } from '../../../styles/text';
import { SocialIconWrapper } from '../../common/Icon/styles';

export const Container = styled(SectionContainer)`
  background-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.snow};

  & ${SocialIconWrapper} {
    width: 55px;
    height: 55px;
    display: inline-flex;
    font-size: 32px;
    justify-content: center;
    align-items: center;
  }
  & ${H2} {
    color: ${(props) => props.theme.colors.primary};

    line-height: 1.6;
  }

  & ${H6} {
    color: ${(props) => props.theme.colors.primary};

    font-weight: 400;
    margin-bottom: 48px;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 300px;
  margin-left: auto;
`;
