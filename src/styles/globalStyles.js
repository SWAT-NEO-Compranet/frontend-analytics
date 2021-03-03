import { createGlobalStyle } from 'styled-components'

export const theme = {
  color: {
    primary: '#6900C6',
    secondary: '#00C8AA',
    light: '#F3F0FF',
    gray: '#F8F8F8',
    dark: '#20003D',
    red: '#DA009A',
    orange: '#FF7848'
  },
  font: {
    main: 'Poppins, sans-serif'
  },
  shadow: '0px 0px 15px 1px rgb(0 0 0 / 12%)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font.main};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`
