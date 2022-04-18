import styled, { css } from 'styled-components';

type Props = {
  disabled?: boolean;
  base?: boolean; // why it is not possible to use keyword default? is it reserved word?
};

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1.5rem;

  ${props =>
    props.base &&
    css`
      background-color: #6e59ce;
      color: #ffffff;
      &:hover {
        background-color: #5242a5;
      }
      &:focus,
      &:active {
        background-color: #5034db;
      }
    `}
  ${props =>
    props.disabled &&
    css`
      background-color: #e5e5e5;
    `}
`;
