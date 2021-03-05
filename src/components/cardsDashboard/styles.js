import styled from 'styled-components'

export const CardsWrapper = styled.section`
  grid-column: 4 / 6;
  margin-right: 1em;
  max-height: 90%;
  overflow: scroll;
  
  @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2;
    margin: 0 2em;
  }
`

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.color.secondary};
  margin-bottom: .5em;
`
