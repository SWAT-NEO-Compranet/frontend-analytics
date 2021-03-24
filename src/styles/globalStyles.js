import styled, { createGlobalStyle, keyframes } from 'styled-components'

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

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${theme.color.primary};
    border-radius: 1rem;
  }
`

// Skeleton animation
const transition = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
`

export const Loading = styled.div`
  grid-column: 1 / 6;
  grid-row: ${props => props.row || 2};
  // width: 100%;
  // height: 100%;
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(90deg, transparent 0%, #E8E8E8 50%, transparent 100%);
    display: block;
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    top: 0;
    animation: ${transition} 1.1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`
