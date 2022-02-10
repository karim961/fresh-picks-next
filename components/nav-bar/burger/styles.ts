import styled from 'styled-components';
import { NestedUL, NestedWrapper } from '../../drop-down/nested/styles';

export const StyledBurger = styled.button`
  display: inline-block;
  width: 50px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  background: transparent;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${({ isOpen }) => (isOpen ? 99 : -1)};
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s linear 0s;
`;

export const CloseMobileMenu = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`;

export const MobileNav = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  text-align: left;

  @media (max-width: ${(props) => props.theme.flexboxgrid.breakpoints.lg}rem) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(115%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 25px 20px;
    transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: 1020;
    box-shadow: -5px 0 20px -5px rgba(0, 0, 0, 0.5);
  }

  li a {
    padding: 12px 0;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    color: ${(props) => props.theme.colors.primary};
  }

  li ${NestedUL} {
    padding-left: 15px;
  }

  li ${NestedWrapper} li > a {
    padding: 0 0 0 15px;
    position: relative;
    text-transform: capitalize;
    font-size: 14px;
    height: 0;
    line-height: 46px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }

  li ${NestedWrapper} > a:after {
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    border-style: solid;
    border-width: 2px 0 0 2px;
    border-color: initial;
    right: 16px;
    top: 50%;
    transform: rotate(-45deg) translateY(-50%);
    transform-origin: top;
    transition: all 0.3s ease-out;
  }

  li ${NestedWrapper}.active > a:after {
    transform: rotate(-135deg) translateY(-50%);
  }

  li .active ${NestedUL} li > a {
    height: 46px;
    visibility: visible;
    opacity: 1;
  }

  li ${NestedWrapper} li > a:before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    transition: all 0.3s;
  }
`;
