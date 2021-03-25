import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const CardWrapper = styled.div`
  background: white;
  color: ${({ theme: { color } }) => color.dark};
  box-shadow: ${({ theme }) => theme.shadow};
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-left: 6px solid ${({ theme: { color } }) => color.light};
  min-height: 225px;
  //height: auto;
  margin: 0 auto 1em;
  display: flex;
  justify-content: space-between;
  //scroll-snap-align: start;
  width: 75%;
  justify-self: center;
`

export const CardInfo = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`

export const CardLink = styled.div`
  padding: 0 1em;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #EDEDED;
    transition: .2s;
  }
`

export const TitleCard = styled.h3`
  font-size: .8em;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.primary};
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
`

export const AmountImage = styled.img`
  width: 1.5em;
`

export const AmountNumber = styled.span`
  font-weight: bold;
  font-size: .75em;
  padding: 0 .8em;
  color: ${({ theme: { color } }) => color.dark};
`

export const IconsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
