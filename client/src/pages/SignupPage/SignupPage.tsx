import React from 'react';
import { StyledSignupPage } from './styled/Signup.styled';
import { Form } from './Form';

export const SignUpPage: React.FC = () => {
  return (
    <StyledSignupPage>
      <Form />
    </StyledSignupPage>
  );
};
