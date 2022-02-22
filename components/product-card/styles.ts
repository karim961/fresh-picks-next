import styled from 'styled-components';

export const Overlay = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  //padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: 0.3s;
  opacity: 0;
  color: ${(props) => props.theme.colors.snow};
  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme.colors.primary70};
  }

  & h3 {
    color: ${(props) => props.theme.colors.snow};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductContainer = styled.div<{ imageUrl: string }>`
  border-radius: 10px;
  height: 250px;
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`;
