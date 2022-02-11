import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.Lato};
`;

export const ErrorTitle = styled.h1`
  font-size: 3em;
  color: ${(props) => props.theme.colors.primaryText};
  margin: 0;
`;

export const ErrorDescription = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0;
`;
