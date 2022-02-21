import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.primaryText};
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.section`
  width: 100%;
  padding: 125px 0;
`;

export const Icon = styled.i`
  font-size: 1.1rem;
  display: inline-flex;
  width: 32px;
  height: 21px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.cyan};
`;

export const Card = styled.div`
  padding: 1em;
  -webkit-box-shadow: 0 3px 0 #ddd;
  box-shadow: 0 3px 0 #ddd;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.25em;
`;
export const ColText = styled(Col)<{ right: boolean }>`
  text-align: ${(props) => (props.right ? 'right' : 'left')}; ;
`;
