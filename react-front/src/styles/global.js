import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

html, body, #root{
  min-height: 100vh;
}

html{
  --color-light: #E1E6E2;
  --color-dark: #222;
  --color-primary: #619D9B;
  --color-primary-light: #6bcec9;
}

body{
  background-color: var(--color-light)
}

button{
  cursor: pointer;
}

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 32px 2%;
`;
