import styled from 'styled-components';

export const Overlay = styled.div`
  border-radius: 0 0 10px 10px;

  position: absolute;
  top: 80%;
  bottom: -55px;
  left: 0;
  width: 100%;
  //padding-top: 5px;
  //padding-bottom: 5px;
  //height: 100%;
  display: flex;
  //padding-bottom: 30px;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  transition: 0.3s;
  color: ${(props) => props.theme.colors.snow};
  background-color: ${(props) => props.theme.colors.primary};

  // &:hover {
  //   background-color: ${(props) => props.theme.colors.primary70};
  //   top: 55%;
  //   bottom: 00px;
  // }

  & h3 {
    color: ${(props) => props.theme.colors.snow};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  & > div {
    margin-top: 5px;
  }
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

  &:hover ${Overlay} {
    background-color: ${(props) => props.theme.colors.primary70};
    top: 55%;
    bottom: 00px;
  }
`;
