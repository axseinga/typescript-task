import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { StyledCheckbox } from './styled/Checkbox.styled';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isChecked: boolean;
  defaultChecked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, isChecked, defaultChecked, handleChange }) => {
  return (
    <StyledCheckbox>
      <label htmlFor={label}>{label}</label>
      <input type='checkbox' id={label} checked={isChecked} defaultChecked={defaultChecked} onChange={handleChange} />
    </StyledCheckbox>
  );
};
