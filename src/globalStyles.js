import { createGlobalStyle } from "styled-components"

const color = {
  primaryColor: "#6900C6",
  secondaryColor: "#00C8AA",
  primaryColor: "#6900C6",
  secondaryColor: "#00C8AA",
  ligthColor: "#F3F0FF",
  darkColor: "#20003D",
  grayColor: "#F8F8F8",
  redColor: "#DA009A",
  orangeColor: "#FF7848"
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${color.primaryColor};
    color: white;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`