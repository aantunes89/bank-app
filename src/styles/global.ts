import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 1rem * 62,5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  h1, h2, h3, h4, h5, h6, a {
    /* color: #FFF; */
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input {
    height: 3rem;
    border-radius: 4px;
    padding-left: .5rem;
  }
`;

export default GlobalStyle;