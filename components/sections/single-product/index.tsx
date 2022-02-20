import { ReactElement } from 'react';
import {
  ProductImageWrapper,
  SingleProductContainer,
  TopSection,
} from './styles';
import { getMediaUrl } from '../../../api/cms';
import { H1 } from '../../../styles/text';
import { GetAnimation } from '../../../utils/strings';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import AvailabilityCalendar from '../../availability-calendar';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

interface SingleProductProps {
  product: any;
}

const SingleProduct = ({
  product,
}: SingleProductProps): ReactElement<SingleProductProps> => {
  return (
    <SingleProductContainer>
      <ScrollAnimation animateIn={GetAnimation('fadeInDown')} animateOnce>
        <TopSection>
          <ScrollAnimation
            animateIn={GetAnimation('fadeInDown')}
            animateOnce
            delay={600}
          >
            {product.Images && (
              <ProductImageWrapper>
                <img src={getMediaUrl(product.Image.url)} alt={product.title} />
              </ProductImageWrapper>
            )}

            <H1>{product.title}</H1>
          </ScrollAnimation>
        </TopSection>
      </ScrollAnimation>
      <Grid>
        <Row>
          <Col xs={12}>
            {product.variations && (
              <AvailabilityCalendar variations={product.variations} />
            )}
          </Col>
        </Row>
      </Grid>
    </SingleProductContainer>
  );
};

export default SingleProduct;
