import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.snow};
  box-shadow: 0 0 17px 1px rgb(0 0 0 / 6%);
  padding: 30px 20px;
  text-align: center;
  transition: 0.3s;

  & h4 {
    padding-bottom: 10px;
  }

  & p {
    font-weight: 300;
    margin-bottom: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgStyled = styled.img`
  max-height: 100%;
  width: auto;
  max-width: 80px;
  margin-bottom: 20px;
`;

export const StyledA = styled.a`
  display: inline-block;
  height: 100%;
`;
