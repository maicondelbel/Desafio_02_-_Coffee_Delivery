import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  body {
    background-color: ${(props) => props.theme['--base---background']};
    color: ${(props) => props.theme['--base---text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme['--font---text']};
    font-weight: 400;
    font-size: ${(props) => props.theme['--text---regular--m']};
    border:  transparent;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    line-height: 0;
  }

  a {
    text-decoration: none;
  }
`
