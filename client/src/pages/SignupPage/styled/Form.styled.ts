import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.box};

  & h1 {
    font-size: 1.5rem;
    text-align: center;
    text-shadow: ${({ theme }) => theme.shadow.text};
  }

  & div {
    & label {
    }
    & input {
    }
  }
`;
