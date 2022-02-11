import styled, { css } from 'styled-components';

import { Col } from 'react-styled-flexboxgrid';

export const Container = styled.div`
  width: 100%;
  padding: 125px 0;
  background: ${(props) => props.theme.colors.white}; ;
`;
export const ImageWrapper = styled.div<{
  accentColor: string;
  reverse?: boolean;
}>`
  margin-left: 40px;
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    top: 40px;
    ${(props) =>
      props.reverse
        ? css`
            left: 40px;
          `
        : css`
            right: 40px;
          `};
    bottom: -40px;
    background-color: ${(props) => props.accentColor};
    border-radius: 10px;
    z-index: -1;
  }
`;
export const StoryImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const TextCol = styled(Col)`
  padding-top: 30px;
  color: ${(props) => props.theme.colors.primaryText};
  & h2 {
    margin-bottom: 15px;
  }

  & h6 {
    font-weight: bold;
    margin-bottom: 23px;
  }
`;
