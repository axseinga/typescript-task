import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm } from './styled/Form.styled';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

export interface FormTypes {
  firstName: string;
  lastName: string;
}

export const Form: React.FC = () => {
  const defaultValues: FormTypes = {
    firstName: '',
    lastName: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();

  const onSubmit = (formData: FormTypes) => {
    console.log('submitting');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>
      <div>
        <Input
          name='firstName'
          label='First name'
          type='text'
          placeholder='Please enter your name'
          register={register}
          rules={{ required: 'This field is required', minLength: { value: 3, message: 'Name needs to have at least 3 characters' } }}
          errors={errors}
        />
        <Input
          name='lastName'
          label='Last name'
          type='text'
          placeholder='Please enter your surname'
          register={register}
          rules={{ required: 'This field is required', minLength: { value: 3, message: 'Surname needs to have at least 3 characters' } }}
          errors={errors}
        />
        {/*
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
        /> */}
        <Checkbox label='Want to receive a newsletter?' isChecked={false} handleChange={() => console.log('handling change')} />
      </div>
      <Button type='submit' primary>
        Submit
      </Button>
    </StyledForm>
  );
};
