import styled from 'styled-components';

export const StyledModal = styled.div`
  background-color: rgba(157, 157, 157, 0.8);
  height: 100vh;
  width: 100vw;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    background-color: white;
    width: 300px;
    height: 200px;
    opacity: 1;
    padding: 1rem;
  }
`;
