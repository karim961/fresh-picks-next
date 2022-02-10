// @flow
import { ReactElement, useRef } from 'react';
import {
  CloseButton,
  VideoPlayerContainer,
  VideoPlayerPopup,
  YoutubeIframe,
} from './styles';
import { useOnClickOutside } from '../../utils/hooks';

export type VideoProps = {
  videoId: string;
  setIsVideoActive: (b: boolean) => void;
};

const VideoPlayer = ({
  videoId,
  setIsVideoActive,
}: VideoProps): ReactElement<VideoProps> => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setIsVideoActive(false));

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsVideoActive(false);
  };

  return (
    <>
      <VideoPlayerPopup>
        <VideoPlayerContainer ref={node}>
          <CloseButton onClick={handleClick} />
          <YoutubeIframe
            title="youtube player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoPlayerContainer>
      </VideoPlayerPopup>
    </>
  );
};

export default VideoPlayer;
