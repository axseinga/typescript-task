import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import { StyledApp } from './styles/App.styled';
import { SignUpPage } from './pages/SignupPage/SignupPage';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <SignUpPage />
      </StyledApp>
    </>
  );
};

export default App;
