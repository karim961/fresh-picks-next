import styled from 'styled-components';
import { H1, H5 } from '../../../styles/text';

export const StyledDescription = styled(H5)`
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledTitle = styled(H1)``;

export const StyledHeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;
