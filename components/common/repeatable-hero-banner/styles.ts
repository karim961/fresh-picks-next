import styled, { css } from 'styled-components';
import { ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';

/* *********Buttons********* */
const slideButtonStyle = css`
  position: absolute;
    top: 50%;
    left: 70px;
    transform: translateY(-50%);
    border: 0;
    font-size: 15px;
    padding: 0;
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0;
    visibility: hidden;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    cursor: pointer;
    background: ${(props) => props.theme.colors.white};
    z-index: 99;
}
`;

const chevron = css`
  border-style: solid;
  border-width: 0.2em 0.2em 0 0;
  border-color: ${(props) => props.theme.colors.primary};
  content: '';
  display: inline-block;
  height: 1em;
  left: 0.15em;
  position: relative;
  top: 0.15em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 1em;
`;

export const StyledButtonBack = styled(ButtonBack)`
  ${slideButtonStyle};
  &:before {
    ${chevron};
    transform: rotate(-135deg);
  }
`;

export const StyledButtonNext = styled(ButtonNext)`
  ${slideButtonStyle};
  left: auto;
  right: 70px;

  &:before {
    ${chevron};
    left: -0.15em;
    transform: rotate(45deg);
  }
`;
/* ************************* */

export const StyledRepeatableHeroBanner = styled.div`
  position: relative;
  &:hover ${StyledButtonBack}, &:hover ${StyledButtonNext} {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledSlide = styled(Slide)`
  transition: opacity 500ms ease-in-out 0s, visibility 500ms ease 0s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;
