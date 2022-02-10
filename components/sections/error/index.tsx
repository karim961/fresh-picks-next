import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ErrorTitle, StyledErrorContainer, ErrorDescription } from './styles';
import { TEXT } from '../../../config/strings';
import theme from '../../../styles/theme';

const ErrorPage = () => (
  <>
    <Head>
      <title>Error</title>
    </Head>
    <ThemeProvider theme={theme}>
      <StyledErrorContainer>
        <div>
          <ErrorTitle>{TEXT.SERVER_ERROR_CODE}</ErrorTitle>
          <ErrorDescription>{TEXT.SERVER_ERROR}</ErrorDescription>
        </div>
      </StyledErrorContainer>
    </ThemeProvider>
  </>
);

export default ErrorPage;
