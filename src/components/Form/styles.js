import styled from 'styled-components'

export const Container = styled.form`
  border-radius: 8px;
  background: white;
  // margin: 3em auto;
  padding: .8em;
  min-width: 450px;
  max-height: 75px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  // justify-content: space-between;
  // align-items: center;

  @media(max-width: 425px) {
    // background: red;
    min-width: 370px;
  }

  @media(max-width: 1023px){
    width: 90%
  }
`
export const Label = styled.label`
  color: ${({ theme: { color } }) => color.dark};
  font-size: 12px;
  // position: relative;
  font-weight: 400;
  display: block;
  width: 100%;
  margin-right: 16px;
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
  // margin-bottom: 3em;
`

export const Dropdown = styled.select`
  display: block;
  background: transparent;
  border: 1px solid;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  outline-color: ${({ theme: { color } }) => color.primary};
  font-family: ${({ theme }) => theme.font.main};
  color: ${({ theme: { color } }) => color.dark};

  @media(max-width: 767px) {
    width: 80%;
  }
`
