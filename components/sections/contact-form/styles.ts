import styled from 'styled-components';
import { SectionContainer } from '../../../styles/styles';
import { Col } from 'react-styled-flexboxgrid';

export const FormSectionContainer = styled(SectionContainer)`
  padding-bottom: 50px;
  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.colors.secondary};
    }
  }

  & textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 16px;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.caption}rem;
  margin-bottom: 10px;
`;

export const StyledForm = styled.form``;

export const ButtonContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;
