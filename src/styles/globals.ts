import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root  {
    --primary-grey: rgb(36, 36, 36);
    --primary-aqua: rgb(100, 238, 188);
    --primary-white: rgb(255, 255, 255);
    --error-red: rgb(255, 0, 0);
    --hover-white: rgba(255, 255, 255, 0.1);
    --hover-white-intense: rgba(255, 255, 255, 0.3);
    --hover-grey: rgba(36, 36, 36, 0.6);
    --primary-grey-transparent: rgba(36, 36, 36, 0.9);
  }

  body {
    font-family: 'Bebas Neue', sans-serif;
    background-color: var(--primary-grey);
    color: var(--primary-white);
    font-weight: 400;
    margin: 0;
  }
`;

export default GlobalStyle;
