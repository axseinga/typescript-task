import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { StyledInput } from './styled/Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ name, label, type, value, handleChange }) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value} onChange={handleChange} />
    </StyledInput>
  );
};
