import { ReactElement } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { TEXT } from '../../../config/strings';
import { H2, H6 } from '../../../styles/text';
import Icon from '../../common/Icon';
import { useTheme } from 'styled-components';
import { ButtonContainer, Container } from './styles';
import Button from '../../common/button';

interface GetInTouchProps {}

const GetInTouch = ({}: GetInTouchProps): ReactElement<GetInTouchProps> => {
  const theme = useTheme();
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12}>
            <Icon
              url={`mailto:te.com`}
              icon={'fas fa-envelope'}
              color={theme.colors.primary}
              hoverColor={theme.colors.accent}
            />
            <Icon
              url={`tel:101010`}
              icon={'fas fa-phone-alt'}
              color={theme.colors.primary}
              hoverColor={theme.colors.accent}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <H2>{TEXT.LETS_TALK}</H2>
            <H6>{TEXT.LETS_TALK_TEXT}</H6>
          </Col>
          <Col md={6} xs={12}>
            <ButtonContainer>
              <Button text={TEXT.START_CONVERSATION} url={'/contact'} />
            </ButtonContainer>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default GetInTouch;
