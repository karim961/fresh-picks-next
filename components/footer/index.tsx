// /* eslint-disable camelcase */
//
// import React, { ReactElement } from 'react';
// import { Col, Row } from 'react-styled-flexboxgrid';
// import {
//   Description,
//   FooterContainer,
//   LinksContainer,
//   SocialLinkContainer,
//   Title,
// } from './styles';
// import { switchComponent } from '../../utils/strapi';
//
// import globals from '../../config/globals';
//
// interface FooterProps {
//   title: string;
//   description: string;
//   links: Array<{ [key: string]: any }>;
//   social_links: Array<{ [key: string]: any }>;
// }
//
// const Footer = ({
//   description,
//   links,
//   social_links,
//   title,
// }: FooterProps): ReactElement<FooterProps> => {
//   return (
//     <FooterContainer fluid>
//       <Row>
//         <Col md={3} xs={12}>
//           <Title>{title}</Title>
//           <Description>{description}</Description>
//         </Col>
//         <LinksContainer md={5} xs={12}>
//           {links &&
//             links.length > 0 &&
//             links.map((link) => {
//               return (
//                 <div key={`iterator${link.text}`} style={{ marginTop: 19.3 }}>
//                   {link.type === 'link' &&
//                     switchComponent(globals.CMS_COMPONENTS.RICH_DISPLAY, link)}
//                 </div>
//               );
//             })}
//         </LinksContainer>
//         <SocialLinkContainer md={4} xs={12}>
//           {social_links &&
//             social_links.length > 0 &&
//             social_links.map((socialLink) => {
//               return (
//                 socialLink.type === 'social' &&
//                 switchComponent(globals.CMS_COMPONENTS.RICH_DISPLAY, socialLink)
//               );
//             })}
//         </SocialLinkContainer>
//       </Row>
//     </FooterContainer>
//   );
// };
//
// export default Footer;
