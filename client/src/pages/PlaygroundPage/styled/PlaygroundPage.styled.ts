import styled from 'styled-components';

export const StyledPlaygroundPage = styled.section`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.box};
  height: 70vh;
  width: 60vw;

  & > div {
    & button {
      align-self: center;
    }
  }
`;

export const StyledUsersList = styled.table`
  width: 100%;
  border: 1px solid gray;

  thead {
    tr {
      th {
        border: 1px solid gray;
        padding: 5px 10px;
      }
    }
  }

  tbody {
    tr {
      th {
        padding: 0.5rem;
      }
    }
  }
`;
