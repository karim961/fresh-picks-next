import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';

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
