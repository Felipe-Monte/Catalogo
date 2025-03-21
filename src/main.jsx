import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './styles/global';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
