import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { StyledInput } from './styled/Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  register: any;
  rules?: any;
  errors?: any;
}

export const Input: React.FC<InputProps> = ({ name, label, type, placeholder, rules, register, errors }) => {
  const errorMsg = errors[name]?.message;
  console.log(errorMsg);
  const hasError = Boolean(errors && errorMsg);

  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} {...(register && register(name, rules))} />
      {hasError && <p>{errorMsg}</p>}
    </StyledInput>
  );
};
