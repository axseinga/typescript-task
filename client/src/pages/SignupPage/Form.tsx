import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { formSchema } from '../../utils/formValidation';
import { StyledForm } from './styled/Form.styled';
import { Input } from '../../components/Input';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

export interface FormTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({ resolver: joiResolver(formSchema) });

  const onSubmit = (formData: FormTypes) => {
    console.log('submitting');
  };

  return (
    <StyledForm /*novalidate ??? ts error*/ onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>
      <div>
        <Input name='firstName' label='First name' type='text' placeholder='Please enter your name' register={register} errors={errors} />
        <Input name='lastName' label='Last name' type='text' placeholder='Please enter your surname' register={register} errors={errors} />
        <Input name='email' label='Email' type='email' placeholder='Please enter your email' register={register} errors={errors} />
        <Input
          name='password'
          label='Password'
          type='password'
          placeholder='Please type your password'
          register={register}
          errors={errors}
        />
        <Input
          name='passwordRepeat'
          label='Repeat password'
          type='password'
          placeholder='Please repeat your password'
          register={register}
          errors={errors}
        />
        <Checkbox label='Want to receive a newsletter?' isChecked={false} handleChange={() => console.log('handling change')} />
      </div>
      <Button type='submit' primary>
        Submit
      </Button>
    </StyledForm>
  );
};
