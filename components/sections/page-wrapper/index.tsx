import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Header from '../header';
import { ReactElement } from 'react';
import theme from '../../../styles/theme';
import { PageWrapperProps } from '../../../models/page-wrapper';
import { Wrapper } from '../../../styles/styles';
import Footer from '../footer';

const PageWrapper = ({
  pageWrapperData,
  children,
}: PageWrapperProps): ReactElement<PageWrapperProps> => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css"
          integrity="sha512-rQgMaFKZKIoTKfYInSVMH1dSM68mmPYshaohG8pK17b+guRbSiMl9dDbd3Sd96voXZeGerRIFFr2ewIiusEUgg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {
        <ThemeProvider theme={theme}>
          <Wrapper>
            {/*{pageWrapperData.infoSection && (*/}
            {/*  <InfoBanner*/}
            {/*    leftContent={pageWrapperData.infoSection.leftContent}*/}
            {/*    rightContent={pageWrapperData.infoSection.rightContent}*/}
            {/*  />*/}
            {/*)}*/}
            {pageWrapperData.header && (
              <Header
                logo={pageWrapperData.header.logo}
                phoneNumber={pageWrapperData.header.phoneNumber}
                email={pageWrapperData.header.email}
                address={pageWrapperData.header.address}
              />
            )}
            {children}
            {pageWrapperData.footer && (
              <Footer
                title={pageWrapperData.footer.title}
                description={pageWrapperData.footer.description}
                social_links={pageWrapperData.footer.social_links}
              />
            )}
          </Wrapper>
        </ThemeProvider>
      }
    </>
  );
};

export default PageWrapper;
