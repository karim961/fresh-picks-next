// @flow
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
// eslint-disable-next-line import/no-cycle
import { switchComponent } from '../../utils/strapi';
import PlayButton from '../video-player/play-button';
import { BannerActionsContainer, Container, PlayCol, Title } from './styles';
import globals from '../../config/globals';
import { ReactElement } from 'react';
import { H3 } from '../../styles/text';

const { RICH_DISPLAY } = globals.CMS_COMPONENTS;

export type HeroBannerProps = {
  id?: number;
  backgroundImageSrc: string;
  description: string;
  title: string;
  videoUrl: string;
  action: Array<{ [key: string]: any }>;
  changeVideoState: (t: string, b: boolean) => void;
};

const HeroBanner = ({
  backgroundImageSrc,
  videoUrl,
  description,
  action,
  title,
  changeVideoState,
}: HeroBannerProps): ReactElement<HeroBannerProps> => (
  <Container backgroundImageSrc={backgroundImageSrc}>
    <Grid>
      <Row>
        <Col xs={12} lg={8}>
          <Title>{title}</Title>
          <H3>{description}</H3>
          <BannerActionsContainer>
            {action && action.map((act) => switchComponent(RICH_DISPLAY, act))}
          </BannerActionsContainer>
        </Col>
        <PlayCol xs={false} md={false} lg={4}>
          {videoUrl && (
            <PlayButton
              videoUrl={videoUrl}
              changeVideoState={changeVideoState}
            />
          )}
        </PlayCol>
      </Row>
    </Grid>
  </Container>
);

export default HeroBanner;
