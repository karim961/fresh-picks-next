import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';
import {
  StyledButtonBack,
  StyledButtonNext,
} from '../repeatable-hero-banner/styles';
import { H1, H3 } from '../../../styles/text';

export const StyledHeroBanner = styled.div`
  position: relative;
  &:hover ${StyledButtonBack}, &:hover ${StyledButtonNext} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Container = styled.div<{ backgroundImageSrc: string }>`
  width: 100%;
  height: 78vh;
  color: ${(props) => props.theme.colors.secondary};

  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${({ backgroundImageSrc }) => backgroundImageSrc});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const Title = styled(H1)`
  margin-bottom: 25px;
  font-size: 5.3125em;
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled(H3)`
  color: ${(props) => props.theme.colors.white};
`;

export const BannerActionsContainer = styled.div`
  margin-top: 50px;
`;

export const PlayCol = styled(Col)`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
