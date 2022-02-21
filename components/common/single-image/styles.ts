import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';
import { Col } from 'react-styled-flexboxgrid';

export const SingleImageContainer = styled(SectionContainer)`
  padding: 0 0 50px 0;
`;

export const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
  }
`;
