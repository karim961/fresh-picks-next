import styled, { css } from 'styled-components';

export const VideoPlayerPopup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoPlayerContainer = styled.div`
  max-width: 940px;
  width: 100%;
  height: 52%;
  position: relative;
`;

export const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const closeButtonDisplay = css`
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  top: 50%;
  left: 0;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  margin-top: -6px;
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 2;
  top: -35px;
  right: -35px;
  display: inline-block;
  width: 35px;
  height: 35px;
  overflow: hidden;
  border: none;
  background: transparent;
  cursor: pointer;

  &::after {
    ${closeButtonDisplay};
    transform: rotate(-45deg);
  }

  &::before {
    ${closeButtonDisplay};
    transform: rotate(45deg);
  }
`;
