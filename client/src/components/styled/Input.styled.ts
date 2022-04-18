import styled from 'styled-components';

export const StyledInput = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  height: 50px;
  & label {
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  & p {
    color: #ff2869;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    margin-left: 1px;
  }
  & input {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 0.8rem;

    &::placeholder {
      opacity: 0.5;
    }
  }
`;
