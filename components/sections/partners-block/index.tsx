import React, { ReactElement } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import HeaderDescription from '../../common/header-description';
import Carousel from '../../common/carousel';
import theme from '../../../styles/theme';
import { getEmPx } from '../../../utils/sizes';
import { PartnerImageWrapper, PartnersBlockContainer } from './styles';
import { getMediaUrl } from '../../../api/cms';

interface PartnersBlockProps {
  partners: Array<any>;
}

const PartnersBlock = ({
  partners,
}: PartnersBlockProps): ReactElement<PartnersBlockProps> => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: partners.length < 5 ? partners.length : 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: theme.flexboxgrid.breakpoints.lg * getEmPx(),
        settings: {
          slidesToShow: partners.length < 4 ? partners.length : 4,
        },
      },
      {
        breakpoint: theme.flexboxgrid.breakpoints.md * getEmPx(),
        settings: {
          slidesToShow: partners.length < 3 ? partners.length : 3,
        },
      },
      {
        breakpoint: theme.flexboxgrid.breakpoints.sm * getEmPx(),
        settings: {
          slidesToShow: partners.length < 2 ? partners.length : 2,
        },
      },
    ],
  };

  return (
    <PartnersBlockContainer>
      <Grid>
        <Row center={'xs'}>
          <Col md={8} xs={12}>
            <HeaderDescription title={'Our Partners'} />
          </Col>
        </Row>

        <Carousel settings={settings}>
          {partners.map((partner: any) => (
            <>
              <PartnerImageWrapper>
                <img
                  src={getMediaUrl(partner.image.url)}
                  alt={partner.image.alternativeText}
                />
              </PartnerImageWrapper>
            </>
          ))}
        </Carousel>
      </Grid>
    </PartnersBlockContainer>
  );
};

export default PartnersBlock;
