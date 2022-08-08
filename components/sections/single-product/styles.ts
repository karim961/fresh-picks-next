import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';
import { Col, Row } from 'react-styled-flexboxgrid';
import { H2 } from '../../../styles/text';

export const SingleProductContainer = styled(SectionContainer)`
  padding: 0;
  overflow: hidden;
`;

export const TopSection = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  background: transparent;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  :before {
    position: absolute;
    content: ' ';
    height: 100%;
    left: -200px;
    right: -200px;
    background: ${(props) => props.theme.colors.accent};
    border-radius: 0 0 50% 50%/0% 0% 100% 100%;
    bottom: 150px;
    z-index: -1;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    margin-top: 10px;
    text-align: center;
  }
`;
export const ProductImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  img {
    max-width: 300px;
  }
`;

export const DescriptionContainer = styled(SectionContainer)`
  text-align: center;
  padding: 50px 0;
  font-weight: 600;
  & p {
    margin-bottom: 1.5rem;
    font-size: ${(props) => props.theme.fontSizes.h5}rem;
  }
`;

export const PackagingRow = styled(Row)`
  margin-bottom: 3rem;

  ${H2} {
    flex-basis: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  & ${Col} {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
  }

  & img {
    max-width: 100%;
  }

  & ul {
    list-style: none; /* Remove default bullets */
  }

  & li {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSizes.h5}rem;
  }

  & ul li::before {
    content: '\\2022'; /* Add content: \\2022 is the CSS Code/unicode for a bullet */
    color: ${(props) => props.theme.colors.accent}; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`;
