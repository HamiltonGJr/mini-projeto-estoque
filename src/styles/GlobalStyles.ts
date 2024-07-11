import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0ffff;
  }
`;

export default GlobalStyle;
