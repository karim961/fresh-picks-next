import React, { ReactElement } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import {
  Description,
  FooterContainer,
  LinksContainer,
  SocialLinkContainer,
  StyledA,
  Title,
} from './styles';

import Icon from '../../common/Icon';
import { useTheme } from 'styled-components';
import { FooterProps } from '../../../models/page-wrapper';
import Link from 'next/link';
import ROUTES from '../../../config/routes';
import { TEXT } from '../../../config/strings';

const Footer = ({
  title,
  description,
  social_links,
}: FooterProps): ReactElement<FooterProps> => {
  const theme = useTheme();
  return (
    <FooterContainer fluid>
      <Row>
        <Col md={3} xs={12}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Col>
        <LinksContainer md={5} xs={12}>
          <Link href={ROUTES.INDEX} passHref>
            <StyledA>{TEXT.HOME}</StyledA>
          </Link>
          <Link href={ROUTES.ABOUT} passHref>
            <StyledA>{TEXT.ABOUT}</StyledA>
          </Link>
          <Link href={ROUTES.CONTACT} passHref>
            <StyledA>{TEXT.CONTACT}</StyledA>
          </Link>
        </LinksContainer>
        <SocialLinkContainer md={4} xs={12}>
          {social_links &&
            social_links.length > 0 &&
            social_links.map((socialLink) => {
              return (
                <Icon
                  key={socialLink._id}
                  icon={socialLink.icon}
                  url={socialLink.url}
                  color={theme.colors.white}
                  hoverColor={theme.colors.white}
                />
              );
            })}
        </SocialLinkContainer>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
