import { ReactElement } from 'react';
import Slider from 'react-slick';
import { SlideContainer, StyledFeaturedProductsContainer } from './styles';
import { Grid } from 'react-styled-flexboxgrid';

interface FeaturedProductsProps {
  title: string;
  Products: Array<any>;
}

const FeaturedProducts =
  ({}: FeaturedProductsProps): ReactElement<FeaturedProductsProps> => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <StyledFeaturedProductsContainer>
        <Grid>
          <Slider {...settings}>
            <SlideContainer>
              <div>
                <h3>1</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>2</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>3</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>4</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>5</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>6</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>7</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>8</h3>
              </div>
            </SlideContainer>
            <SlideContainer>
              <div>
                <h3>9</h3>
              </div>
            </SlideContainer>
          </Slider>
        </Grid>
      </StyledFeaturedProductsContainer>
    );
  };

export default FeaturedProducts;
