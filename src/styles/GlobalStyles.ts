import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

export default GlobalStyle;
