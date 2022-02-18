import React, { ReactElement } from 'react';
import { FeaturedProductsBlockContainer } from './styles';
import Carousel from '../common/carousel';

import theme from '../../styles/theme';
import { getEmPx } from '../../utils/sizes';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import HeaderDescription from '../common/header-description';
import ProductCard from '../product-card';

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
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: theme.flexboxgrid.breakpoints.lg * getEmPx(),
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: theme.flexboxgrid.breakpoints.md * getEmPx(),
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: theme.flexboxgrid.breakpoints.sm * getEmPx(),
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <FeaturedProductsBlockContainer>
        <Grid>
          <Row center={'xs'}>
            <Col md={8} xs={12}>
              <HeaderDescription
                title={'Our Top Selection'}
                description={'test test'}
              />
            </Col>
          </Row>

          <Carousel settings={settings}>
            <ProductCard title={'Apple'} link={'/contact'} />
            <ProductCard title={'Apple'} link={'/contact'} />
            <ProductCard title={'Apple'} link={'/contact'} />
            <ProductCard title={'Apple'} link={'/contact'} />
            <ProductCard title={'Apple'} link={'/contact'} />
            <ProductCard title={'Apple'} link={'/contact'} />
          </Carousel>
        </Grid>
      </FeaturedProductsBlockContainer>
    );
  };

export default FeaturedProducts;
