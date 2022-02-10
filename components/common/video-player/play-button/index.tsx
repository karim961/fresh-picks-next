// @flow

import { StyledPlayButton } from './styles';
import { ReactElement } from 'react';

export type PlayButtonProps = {
  videoUrl: string;
  // eslint-disable-next-line no-unused-vars
  changeVideoState: (videoUrl: string, b: boolean) => void;
};

const PlayButton = ({
  changeVideoState,
  videoUrl,
}: PlayButtonProps): ReactElement<PlayButtonProps> => {
  const handleClick = (e: any) => {
    e.preventDefault();
    changeVideoState(videoUrl, true);
  };

  return <StyledPlayButton onClick={handleClick} />;
};

export default PlayButton;
