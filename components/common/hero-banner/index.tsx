// @flow
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
// eslint-disable-next-line import/no-cycle
import PlayButton from '../video-player/play-button';
import { Container, Description, PlayCol, Title } from './styles';
import { ReactElement } from 'react';

export type HeroBannerProps = {
  id?: number;
  backgroundImageSrc: string;
  description: string;
  title: string;
  videoUrl: string;
  changeVideoState: (t: string, b: boolean) => void;
};

const HeroBanner = ({
  backgroundImageSrc,
  videoUrl,
  description,
  title,
  changeVideoState,
}: HeroBannerProps): ReactElement<HeroBannerProps> => (
  <Container backgroundImageSrc={backgroundImageSrc}>
    <Grid>
      <Row>
        <Col xs={1} md={1} lg={false} />
        <Col xs={10} md={7} lg={8}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {/*<BannerActionsContainer>*/}
          {/*  /!*{action && action.map((act) => switchComponent(RICH_DISPLAY, act))}*!/*/}
          {/*</BannerActionsContainer>*/}
        </Col>
        <Col xs={1} md={false} lg={false} />

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
