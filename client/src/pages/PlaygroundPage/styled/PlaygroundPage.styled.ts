import styled from 'styled-components';

export const StyledPlaygroundPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    box-shadow: ${({ theme }) => theme.shadow.box};
    height: 70vh;
    width: 60vw;

    & button {
      align-self: center;
    }
  }
`;
