// @flow
import { Grid, Row } from 'react-styled-flexboxgrid';
import { SimpleBannerContainer, PageName } from './styles';
import { ReactElement } from 'react';

export type SimpleBannerProps = {
  id?: number;
  backgroundImageSrc: string;
  name: string;
};

const SimpleBanner = ({
  backgroundImageSrc,
  name,
}: SimpleBannerProps): ReactElement<SimpleBannerProps> => (
  <SimpleBannerContainer backgroundImageSrc={backgroundImageSrc}>
    <Grid>
      <Row center="xs">
        <PageName>{name}</PageName>
      </Row>
    </Grid>
  </SimpleBannerContainer>
);

export default SimpleBanner;
