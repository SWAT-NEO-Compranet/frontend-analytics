import styled from 'styled-components'

export const ControllsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgba(255, 255, 255, 0.6);
  margin: 0 3em;
  margin-bottom: 20px;
`

export const Span = styled.span`
  grid-column-start: 2;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.primary};
`

export const IconPrev = styled.img`
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
`

export const Button = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  outline: none;
  
  &:hover {
    background: #dad8d8;
    transition: .2s;
  }
`

export const Danger = styled.p`
  margin: 0 3em;
  text-align: center;
  color: #d9534f;
`
