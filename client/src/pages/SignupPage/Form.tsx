import React from 'react';
import { StyledForm } from './styled/Form.styled';
import { Input } from '../../components/Input';

export const Form: React.FC = () => {
  return (
    <StyledForm>
      <Input name='firstName' label='First name' type='text' value='' handleChange={() => console.log('handling change')} />
      <Input name='lastName' label='Last name' type='text' value='' handleChange={() => console.log('handling change')} />
      <Input name='email' label='Email' type='email' value='' handleChange={() => console.log('handling change')} />
      <Input name='password' label='Password' type='password' value='' handleChange={() => console.log('handling change')} />
      <Input name='repeat_password' label='Repeat password' type='password' value='' handleChange={() => console.log('handling change')} />
      <button>Submit</button>
    </StyledForm>
  );
};
