// @flow
import { ReactElement, useState } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import VideoPlayer from '../video-player';
import { getYoutubeVideoId } from '../../utils/videos';
import {
  StyledButtonBack,
  StyledButtonNext,
  StyledRepeatableHeroBanner,
  StyledSlide,
} from './styles';
// eslint-disable-next-line import/no-cycle
import HeroBanner from '../hero-banner';
import { getMediaUrl } from '../../api/cms';

export type RepeatableHeroBannerProps = {
  hero_banner: Array<any>;
};

const RepeatableHeroBanner = ({
  hero_banner,
}: RepeatableHeroBannerProps): ReactElement<RepeatableHeroBannerProps> => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState('');

  const changeVideoState = (vUrl: string, isActive: boolean): void => {
    setActiveVideoUrl(vUrl);
    setIsVideoActive(isActive);
  };
  console.log('here', hero_banner);
  let i = -1;
  return (
    <StyledRepeatableHeroBanner>
      <CarouselProvider
        isIntrinsicHeight
        totalSlides={hero_banner.length}
        infinite
        naturalSlideHeight={100}
        naturalSlideWidth={100}
      >
        <Slider classNameAnimation="cssAnimation">
          {hero_banner.map((hb) => {
            i += 1;
            return (
              <StyledSlide
                key={hb.id}
                index={i}
                classNameHidden="hidden"
                classNameVisible="visible"
              >
                <HeroBanner
                  key={`${hb.id}`}
                  backgroundImageSrc={
                    hb.media && `${getMediaUrl(hb.media.url)}`
                  }
                  description={hb.content && hb.content.description}
                  title={hb.content && hb.content.title}
                  videoUrl={hb.video_url}
                  action={hb.action}
                  changeVideoState={changeVideoState}
                />
              </StyledSlide>
            );
          })}
        </Slider>
        {hero_banner.length > 1 && (
          <>
            <StyledButtonBack />
            <StyledButtonNext />
          </>
        )}
      </CarouselProvider>
      {isVideoActive && (
        <VideoPlayer
          videoId={getYoutubeVideoId(activeVideoUrl)}
          setIsVideoActive={setIsVideoActive}
        />
      )}
    </StyledRepeatableHeroBanner>
  );
};

export default RepeatableHeroBanner;
