import styled from 'styled-components'

export const Container = styled.form`
  background: blue;
  border-radius: 16px;
  background: ${({theme: { color }}) => color.gray}; 
  margin: 50px auto;
  padding: 40px 80px 30px;
  width: 60%;
  min-height: 500px;
  position: relative;
  @media(max-width: 767px){
    padding: 20px 20px 20px;
    width: initial;
  }
  @media(max-width: 1023px){
    width: 90%
  }

  button{
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    }

`
export const Label = styled.label`
  color: ${({theme: { color }}) => color.primary}; 
  position: relative;
  font-weight: bold; 
  display: block; 
`

export const Required = styled.span`
  color: ${({theme: { color }}) => color.red}; 
  position: absolute;
  top: -8px;
`

export const Note = styled.span`
  color: ${({theme: { color }}) => color.red}; 
  font-size: 12px;
`

export const Input = styled.input`
  background-color: ${({theme: { color }}) => color.light};
  border: 1px solid;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  outline-color: ${({theme: { color }}) => color.primary};
  font-family: ${({theme}) => theme.font.main};
  color: ${({theme: { color }}) => color.dark};
  padding: 0 5px;
`

export const Dropdown = styled.select`
  display: block;
  background: ${({theme: { color }}) => color.light};
  border: 1px solid;
  width: 50%;
  height: 30px;
  border-radius: 8px;
  outline-color: ${({theme: { color }}) => color.primary};
  font-family: ${({theme}) => theme.font.main};
  color: ${({theme: { color }}) => color.dark};

  @media(max-width: 767px){
    width: 80%;
  }
`