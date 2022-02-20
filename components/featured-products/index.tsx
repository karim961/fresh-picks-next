import React, { ReactElement } from 'react';
import { FeaturedProductsBlockContainer } from './styles';
import Carousel from '../common/carousel';

import theme from '../../styles/theme';
import { getEmPx } from '../../utils/sizes';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import HeaderDescription from '../common/header-description';
import ProductCard from '../product-card';
import { getSingleProductLink } from '../../utils/strings';

interface FeaturedProductsProps {
  title: string;
  description: string;
  products: Array<any>;
}

const FeaturedProducts = ({
  title,
  description,
  products,
}: FeaturedProductsProps): ReactElement<FeaturedProductsProps> => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: products.length > 4 ? 4 : products.length,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: theme.flexboxgrid.breakpoints.lg * getEmPx(),
        settings: {
          slidesToShow: products.length > 3 ? 3 : products.length,
        },
      },
      {
        breakpoint: theme.flexboxgrid.breakpoints.md * getEmPx(),
        settings: {
          slidesToShow: products.length > 2 ? 2 : products.length,
        },
      },
      {
        breakpoint: theme.flexboxgrid.breakpoints.sm * getEmPx(),
        settings: {
          slidesToShow: products.length > 1 ? 1 : products.length,
        },
      },
    ],
  };

  return (
    <FeaturedProductsBlockContainer>
      <Grid>
        <Row center={'xs'}>
          <Col md={8} xs={12}>
            <HeaderDescription title={title} description={description} />
          </Col>
        </Row>

        <Carousel settings={settings}>
          {products &&
            products?.map((prod) => (
              <ProductCard
                key={prod.id}
                title={prod.title}
                link={getSingleProductLink(prod.slug)}
              />
            ))}
        </Carousel>
      </Grid>
    </FeaturedProductsBlockContainer>
  );
};

export default FeaturedProducts;
