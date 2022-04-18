import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styled/Button.styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type, children, handleClick, disabled, primary }) => {
  return (
    <StyledButton type={type} onClick={handleClick} disabled={disabled} primary={primary}>
      {children ? <div>{children}</div> : null}
    </StyledButton>
  );
};
