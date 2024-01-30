import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  body, html {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0,2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
