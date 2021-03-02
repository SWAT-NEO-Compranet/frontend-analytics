import styled from "styled-components";

export const Button = styled.button`
  background: ${({theme: { color }}) => color.secondary};
  color: ${({theme: { color }}) => color.light};
  border-radius: 8px; 
  font-weight: bold;
  padding: 10px 50px;
  border: 1px solid transparent;
  display: block;
  margin: 0 auto;

  &:focus{
  outline-color: ${({theme: { color }}) => color.primary}
  }

  &:hover{
    opacity: 0.5;
  }
`
