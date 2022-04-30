import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StyledApp } from './styles/App.styled';
import { SignUpPage } from './pages/SignupPage/SignupPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <WelcomePage />
        {/* <SignUpPage /> */}
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
