import styled, { keyframes } from 'styled-components';

const btnIconRipple = keyframes`
  0% {
    border-width: 4px;
  transform: scale(1)
}

  80% {
    border-width: 1px;
  transform: scale(1.35)
}

  to {
    opacity: 0
  }
`;

export const StyledPlayButton = styled.a`
  height: 80px;
  width: 80px;
  background: ${(props) => props.theme.colors.white};
  display: inline-block;
  border-radius: 50%;
  line-height: 80px;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    border-radius: inherit;
    border: 1px solid ${(props) => props.theme.colors.white};
    animation: ${btnIconRipple} 2s cubic-bezier(0.23, 1, 0.32, 1) infinite both;
  }

  &::after {
    content: '';
    display: inline-block;
    position: relative;
    top: 10px;
    left: 4px;
    border-style: solid;
    border-width: 15px 0 15px 20px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.colors.primary};
  }
`;
