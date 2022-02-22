import React, { ReactElement } from 'react';
import { ProductsBlockContainer } from './styles';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import ProductCard from '../../product-card';
import { getSingleProductLink } from '../../../utils/strings';

interface ProductsBlockProps {
  products: Array<any>;
}

const ProductsBlock = ({
  products,
}: ProductsBlockProps): ReactElement<ProductsBlockProps> => {
  return (
    <ProductsBlockContainer>
      <Grid>
        <Row center={'xs'}>
          {products &&
            products?.map((prod) => (
              <Col md={3} sm={6} xs={12} key={prod.id}>
                <ProductCard
                  title={prod.title}
                  link={getSingleProductLink(prod.slug)}
                />
              </Col>
            ))}
        </Row>
      </Grid>
    </ProductsBlockContainer>
  );
};

export default ProductsBlock;
