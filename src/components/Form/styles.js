import styled from 'styled-components'

export const Container = styled.form`
  border-radius: 16px;
  background: ${({ theme: { color } }) => color.gray}; 
  margin: 0 auto;
  padding: 3em 3em 1em;
  width: 60%;
  min-height: auto;
  box-shadow: ${({ theme }) => theme.shadow};
  //position: relative;
  
  @media(max-width: 767px){
    padding: 20px 20px 20px;
    width: initial;
  }
  @media(max-width: 1023px){
    width: 90%
  }
`
export const Label = styled.label`
  color: ${({ theme: { color } }) => color.primary}; 
  position: relative;
  font-weight: bold; 
  display: block; 
`

export const Required = styled.span`
  color: ${({ theme: { color } }) => color.red}; 
  position: absolute;
  top: -8px;
`

export const Note = styled.span`
  color: ${({ theme: { color } }) => color.red}; 
  font-size: 12px;
  display: block;
  margin-top: 4em;
  text-align: right;
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid;
  width: 100%;
  display: block;
  height: 30px;
  border-radius: 8px;
  outline-color: ${({ theme: { color } }) => color.primary};
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme: { color } }) => color.dark};
  padding: 0 5px;
  margin-bottom: 3em;
`

export const Dropdown = styled.select`
  display: block;
  background: transparent;
  border: 1px solid;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  outline-color: ${({ theme: { color } }) => color.primary};
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme: { color } }) => color.dark};

  @media(max-width: 767px) {
    width: 80%;
  }
`
