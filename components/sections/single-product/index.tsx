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
import { SectionContainer } from '../../../styles/styles';

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
            {product.Image && (
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
            <SectionContainer>
              {product.variations &&
                product.variations.length > 0 &&
                product.variations.map(
                  (variation: {
                    title: string;
                    variations_calendar: any[];
                  }) => (
                    <>
                      {variation.variations_calendar &&
                        variation.variations_calendar.length > 0 && (
                          <AvailabilityCalendar
                            variations={variation.variations_calendar}
                            title={variation.title}
                          />
                        )}
                    </>
                  ),
                )}
            </SectionContainer>
          </Col>
        </Row>
      </Grid>
    </SingleProductContainer>
  );
};

export default SingleProduct;
