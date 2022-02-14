import { Col, Row, Grid } from 'react-styled-flexboxgrid';
import { InfoBannerContainer } from './styles';
import { switchComponent } from '../../../utils/strapi';
import { ReactElement } from 'react';
import { ColText } from '../../../styles/styles';

interface InfoBannerProps {
  leftContent: Array<{ [key: string]: any }>;
  rightContent: Array<{ [key: string]: any }>;
  topContent?: Array<{ [key: string]: any }>;
}

const InfoBanner = ({
  leftContent,
  rightContent,
}: InfoBannerProps): ReactElement<InfoBannerProps> => (
  <InfoBannerContainer>
    <Grid>
      <Row>
        <Col lg={8} xs={6}>
          {leftContent.map((cnt) =>
            switchComponent(cnt.__component, { ...cnt }),
          )}
        </Col>
        <ColText right lg={4} xs={6}>
          {rightContent.map((cnt) =>
            switchComponent(cnt.__component, { ...cnt }),
          )}
        </ColText>
      </Row>
    </Grid>
  </InfoBannerContainer>
);

export default InfoBanner;
