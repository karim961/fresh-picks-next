import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

export const SectionContainer = styled.div`
  padding-bottom: 100px;
  padding-top: 120px;
`;

export const ColText = styled(Col)<{ right: boolean }>`
  text-align: ${(props) => (props.right ? 'right' : 'left')}; ;
`;
