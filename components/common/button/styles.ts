import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex: 0 0 25%;
  margin-top: 15px;
  margin-right: 15px;
  margin-left: 15px;

  @media (max-width: ${(props) => props.theme.flexboxgrid.breakpoints.lg}rem) {
    flex: 0 0 50%;
    margin-top: 20px;
  }
`;

export const ButtonText = styled.span`
  font-family: ${(props) => props.theme.fonts.Lato};
  font-weight: 400;
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.caption}rem;
  text-transform: uppercase;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ButtonBox = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  text-align: center;
  height: 40px;
  position: relative;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  overflow: hidden;

  &:hover :before {
    width: 100%;
    left: 0;
    transition: width 0.3s ease;
    background: ${(props) => props.theme.colors.accent};
  }

  &:before {
    content: '';
    width: 0;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 100%;
    transition: all 0.4s ease;
    border-radius: 30px;
    background: ${(props) => props.theme.colors.primary};
  }
`;