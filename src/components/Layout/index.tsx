import {Global} from '@emotion/core';
import styled from '@emotion/styled';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import React, {ReactNode} from 'react';
import {setConfiguration} from 'react-grid-system';
import theme from '../../../config/theme';
import Footer from '../Footer';
import Header from '../Header';
import {ThemeProvider} from '../Theme';
import {globalStyles} from './globalStyles';

const breakpoints = Object.values(theme.breakpoints);
setConfiguration({breakpoints, containerWidths: breakpoints});

const Main = styled.main``;

interface Props extends React.HTMLAttributes<HTMLElement> {
  headerTitle?: ReactNode;
  location?: Location;
}

const Layout = ({headerTitle, children}: Props) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <ThemeProvider>
      {({dark}: {dark: number}) => (
        <StyledThemeProvider theme={{dark}}>
          <Global styles={globalStyles(dark)} />
          <Header headerTitle={headerTitle} />
          <Main>{children}</Main>
          <Footer />
        </StyledThemeProvider>
      )}
    </ThemeProvider>
  );
};

export default Layout;
