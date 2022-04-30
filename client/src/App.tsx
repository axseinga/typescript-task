import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRoutes } from './routes/Routes';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StyledApp } from './styles/App.styled';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <BrowserRouter>
          <PagesRoutes />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
