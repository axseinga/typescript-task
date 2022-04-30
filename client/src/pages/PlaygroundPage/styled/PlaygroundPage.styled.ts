import styled from 'styled-components';

export const StyledPlaygroundPage = styled.section`
  background-color: ${({ theme }) => theme.color.bg};
  height: 100vh;
  font-family: ${({ theme }) => theme.font.fontPoppins};
  display: flex;
  justify-content: center;
  align-items: center;
`;
