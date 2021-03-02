import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"

export const Link = styled(LinkRouter)`
  margin: 0 auto;
  text-decoration: none;
  padding: 1em 2em;
  border-radius: 8px;
  background: ${({theme: {color}}) => color.secondary};
  border: none;
  color: ${({theme: {color}}) => color.gray};
  font-weight: bold;
  text-transform: uppercase;
`

export const Button = styled.button`
  

`


/* &:focus{
outline-color: ${({theme: { color }}) => color.primary}
}

&:hover{
  opacity: 0.5;
} */