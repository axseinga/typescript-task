import React from 'react';
import { StyledForm } from './styled/Form.styled';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

export const Form: React.FC = () => {
  return (
    <StyledForm>
      <h1>Sign up</h1>
      <div>
        <Input
          name='firstName'
          label='First name'
          type='text'
          value=''
          placeholder='Please enter your name'
          handleChange={() => console.log('handling change')}
        />
        <Input
          name='lastName'
          label='Last name'
          type='text'
          value=''
          placeholder='Please enter your surname'
          handleChange={() => console.log('handling change')}
        />
        <Input
          name='email'
          label='Email'
          type='email'
          value=''
          placeholder='Please enter your email'
          handleChange={() => console.log('handling change')}
        />
        <Input
          name='password'
          label='Password'
          type='password'
          value=''
          placeholder='Type to create password'
          handleChange={() => console.log('handling change')}
        />
        <Input
          name='repeat_password'
          label='Repeat password'
          type='password'
          value=''
          placeholder='Please repeat your password'
          handleChange={() => console.log('handling change')}
        />
        <Checkbox label='Want to receive a newsletter?' isChecked={false} handleChange={() => console.log('handling change')} />
      </div>
      <Button type='submit' primary handleClick={() => console.log('handling this click')}>
        Submit
      </Button>
    </StyledForm>
  );
};
