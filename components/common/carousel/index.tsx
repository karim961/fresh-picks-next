import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { SlideContainer, StyledCarouselContainer } from './styles';

interface CarouselProps {
  settings?: { [key: string]: any };
  children: ReactElement[];
  itemsMargin?: string;
}

const Carousel = ({
  children,
  itemsMargin = '15px',
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  },
}: CarouselProps): ReactElement<CarouselProps> => {
  return (
    <StyledCarouselContainer>
      <Slider {...settings}>
        {React.Children.map(children, (child) => (
          <SlideContainer itemsMargin={itemsMargin}>
            {React.cloneElement(child, {})}
          </SlideContainer>
        ))}
      </Slider>
    </StyledCarouselContainer>
  );
};

export default Carousel;
