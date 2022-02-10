import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Container = styled(Grid)`
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.white25};
  box-shadow: 0 8px 32px 0 rgba(120, 120, 120, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
