import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
    background: #05080c;
  }

  body,
  input,
  button {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: inherit;
  }

  ::selection {
    background: rgba(255, 255, 255, 0.24);
    color: #fff;
  }
`
