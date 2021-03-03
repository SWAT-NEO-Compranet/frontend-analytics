import styled from 'styled-components'

export const ChartsWrapper = styled.section`
  grid-column: 1 / 4;
  //background: red;
  margin: 0 2em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 8% 350px 250px;
  grid-gap: 1em;
`

export const Dependence = styled.div`
  background: ${({ theme: { color } }) => color.gray};
  max-height: 120px;
  border-radius: 1em;
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const Icon = styled.img`
  width: 55px;
`

export const Info = styled.div`
  margin-left: 1em;
`

export const Title = styled.h2`
  color: ${({ theme: { color } }) => color.orange};
  font-size: 1em;
`

export const Detail = styled.p`
  font-size: .7em;
`

export const NumberContracts = styled(Dependence)`
  grid-column: 4 / 6;
`
