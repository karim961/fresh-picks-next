import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { AddressContainer, HeaderContainer, Logo, RightCol } from './styles';

import NavBar from '../nav-bar';
import { ReactElement } from 'react';
import { HeaderProps } from '../../models/page-wrapper';
import { getMediaUrl } from '../../api/cms';
import InfoBlock from './info-block';
import { TEXT } from '../../config/strings';

const Header = ({
  logo,
  address,
  email,
  phoneNumber,
}: HeaderProps): ReactElement<HeaderProps> => (
  <HeaderContainer>
    <Grid>
      <Row center={'xs'} top={'md'}>
        <Col lg={3} md={2} xs={4}>
          <Logo src={getMediaUrl(logo.url)} alt={'logo'} />
        </Col>

        <RightCol lg={9} md={10} sm={8} xs={8}>
          <AddressContainer>
            <InfoBlock
              icon={'fas fa-map-marked-alt'}
              title={TEXT.ADDRESS_TITLE}
              text={address}
            />
            <InfoBlock
              icon={'fas fa-envelope'}
              title={TEXT.EMAIL_TITLE}
              text={email}
              url={`mailto:${email}`}
            />
            <InfoBlock
              icon={'fas fa-phone-alt'}
              title={TEXT.PHONE_TITLE}
              text={phoneNumber}
              url={`tel:${phoneNumber}`}
            />
          </AddressContainer>
          <NavBar
            dropDownContent={[
              { label: 'test', url: '/' },
              {
                label: 'test',
                items: [
                  { label: 'test1', url: 'https://www.google.com.lb/' },
                  { label: 'test1', url: 'https://www.google.com.lb/' },
                  { label: 'test1', url: 'https://www.google.com.lb/' },
                ],
              },
            ]}
          />
        </RightCol>
      </Row>
    </Grid>
  </HeaderContainer>
);

export default Header;