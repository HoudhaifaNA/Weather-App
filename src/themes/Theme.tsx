import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyles';

interface IProps {
  children: ReactElement;
}

const themeObj = {
  colors: {
    primary: '#4A266A',
    errorRed: '#FF5E78',
    cardsColor: {
      Thunderstorm: ['#70839A', '#796417'],
      Drizzle: ['#2B2B2B', '#2F6FBD'],
      Rain: ['#2B2B2B', '#2F6FBD'],
      Snow: ['#946AFA', '#000'],
      Mist: ['#FFB039', '#0E071E'],
      Clear: ['#F2D34D', '#0054B1'],
      Clouds: ['#C9C9C9', '#434F5C'],
    },
  },
};

const Theme = ({ children }: IProps): ReactElement => (
  <ThemeProvider theme={themeObj}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
