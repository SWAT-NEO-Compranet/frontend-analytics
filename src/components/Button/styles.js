import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  // margin: 0 auto;
  text-decoration: none;
  padding: 1em;
  border-radius: 50%;
  background: ${({ theme: { color } }) => color.primary};
  border: none;
  color: ${({ theme: { color } }) => color.gray};
  width: 50px;
  height: 50px;
  font-weight: bold;
  // text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 95px;
`

export const Button = styled.button`

`

/* &:focus{
outline-color: ${({theme: { color }}) => color.primary}
}

&:hover{
  opacity: 0.5;
} */
