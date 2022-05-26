import { CSSProperties, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { H2, H6 } from '../../../styles/text';
import { Container, ImageWrapper, StoryImage, TextCol } from './styles';
import 'animate.css/animate.min.css';

import remarkGfm from 'remark-gfm';
import { GetAnimation } from '../../../utils/strings';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '../../common/button';
import { TEXT } from '../../../config/strings';

interface StoryBlock {
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string;
  reverse?: boolean;
  accentColor: string;
  style?: CSSProperties;
  link: string;
}

const StoryBlock = ({
  subtitle,
  text,
  imageUrl,
  title,
  reverse,
  accentColor,
  style,
  link,
}: StoryBlock): ReactElement<StoryBlock> => {
  return (
    <Container style={style}>
      <Grid>
        <Row reverse={reverse}>
          <Col lg={6} md={6} xs={12}>
            <ScrollAnimation
              animateIn={
                reverse
                  ? GetAnimation('fadeInRight')
                  : GetAnimation('fadeInLeft')
              }
              animateOnce
            >
              <ImageWrapper accentColor={accentColor} reverse={reverse}>
                <StoryImage src={imageUrl} alt={title} />
              </ImageWrapper>
            </ScrollAnimation>
          </Col>
          <TextCol lg={6} md={6} xs={12}>
            <ScrollAnimation
              animateIn={GetAnimation('fadeIn')}
              delay={400}
              animateOnce
            >
              <H2>{title}</H2>
              <H6>{subtitle}</H6>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
              <Row reverse>
                <Col xs={6}>
                  <Button text={TEXT.READ_MORE} url={link} />
                </Col>
              </Row>
            </ScrollAnimation>
          </TextCol>
        </Row>
      </Grid>
    </Container>
  );
};

export default StoryBlock;
