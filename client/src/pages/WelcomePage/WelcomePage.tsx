import React from 'react';
import { StyledWelcomePage, StyledWelcomeModal } from './styled/WelcomePage.styled';
import { Button } from '../../components/Button';

export const WelcomePage = () => {
  return (
    <StyledWelcomePage>
      <StyledWelcomeModal>
        <h1>Welcome!</h1>
        <div>
          <Button type='button' primary>
            Sign up
          </Button>
          <p>or</p>
          <Button type='button' primary>
            Play
          </Button>
        </div>
      </StyledWelcomeModal>
    </StyledWelcomePage>
  );
};
