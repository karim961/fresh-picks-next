import styled from 'styled-components';
import { NestedUL, NestedWrapper } from '../drop-down/nested/styles';

// import Nested from '../common/drop-down/nested';
// const NestedDropDown = styled(Nested)``;

export const NavBarWrapper = styled.nav`
  text-align: right;
  margin-right: -1.5rem;

  & > div > ul > li:first-child {
    margin-left: 0;
  }

  & > div > ul > li {
    display: inline-block;
    position: relative;
    margin-left: 28px;
  }

  & > div > ul > li > div > a {
    color: ${(props) => props.theme.colors.primary};
    display: block;
    font-size: 16px;
    padding: 10px 0;
    transition: all 0.3s ease 0s;
    background: transparent;
    line-height: 1;
    position: relative;
    text-transform: capitalize;
    font-weight: 700;
  }

  & > div > ul > li > div > a:before {
    background: ${(props) => props.theme.colors.primary};
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0;
    width: 0;
    transition: 0.5s;
  }

  & > div > ul > li:hover > div > a {
    color: ${(props) => props.theme.colors.primary};
  }

  & > div > ul > li:hover > div > a:before {
    width: 100%;
  }

  & > div > ul > li ${NestedUL} {
    background: ${(props) => props.theme.colors.white} none repeat scroll 0 0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
    right: 0;
    opacity: 0;
    position: absolute;
    top: 120%;
    transition: all 0.3s ease 0s;
    visibility: hidden;
    width: 220px;
    z-index: 9;
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    text-align: left;
  }

  & > div > ul > li:hover ${NestedUL} {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  & > div > ul > li ${NestedWrapper} li > a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 14px;
    font-weight: 700;

    margin: 0;
    padding: 13px 20px;
    text-transform: capitalize;
    display: block;
  }

  & > div > ul > li ${NestedWrapper} li > a:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.secondary};
  }
`;
