import { ReactElement } from 'react';
import {
  DescriptionContainer,
  PackagingRow,
  ProductImageWrapper,
  SingleProductContainer,
  TopSection,
} from './styles';
import { getMediaUrl } from '../../../api/cms';
import { H1, H2 } from '../../../styles/text';
import { GetAnimation } from '../../../utils/strings';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import AvailabilityCalendar from '../../availability-calendar';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { SectionContainer } from '../../../styles/styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TEXT } from '../../../config/strings';

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
        <Row center={'xs'}>
          {product.description && (
            <Col xs={12} sm={12} md={12} lg={10}>
              <DescriptionContainer>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {product.description}
                </ReactMarkdown>
              </DescriptionContainer>
            </Col>
          )}

          <Col xs={12}>
            <SectionContainer>
              {product.variations &&
                product.variations.length > 0 &&
                product.variations.map(
                  (variation: {
                    image: any;
                    description: string;
                    title: string;
                    variations_calendar: any[];
                  }) => (
                    <>
                      {variation.variations_calendar &&
                        variation.variations_calendar.length > 0 && (
                          <AvailabilityCalendar
                            variations={variation.variations_calendar}
                            title={variation.title}
                            description={variation.description}
                            image={variation.image}
                          />
                        )}
                    </>
                  ),
                )}
            </SectionContainer>
          </Col>
        </Row>
        {product.packaging_image && product.packaging_description && (
          <PackagingRow>
            <H2>{TEXT.PACKAGING}</H2>

            <Col xs={12} sm={12} md={6} lg={4}>
              <img
                src={getMediaUrl(product.packaging_image.url)}
                alt={product.title}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={8}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {product.packaging_description}
              </ReactMarkdown>
            </Col>

            {product.packaging_image2 && product.packaging_description2 && (
              <>
                <Col xs={12} sm={12} md={6} lg={4}>
                  <img
                    src={getMediaUrl(product.packaging_image2.url)}
                    alt={product.title}
                  />
                </Col>

                <Col xs={12} sm={12} md={6} lg={8}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {product.packaging_description2}
                  </ReactMarkdown>
                </Col>
              </>
            )}
          </PackagingRow>
        )}
      </Grid>
    </SingleProductContainer>
  );
};

export default SingleProduct;
