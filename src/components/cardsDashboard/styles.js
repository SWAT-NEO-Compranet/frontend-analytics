import styled from 'styled-components'

export const CardsWrapper = styled.section`
  grid-column: 4 / 6;
  // display: grid;
  max-height: 90%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2;
    margin: 0 2em;
  }

  @media print{
    overflow: initial;
    page-break-after: always;
  }
`

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: .5em;
  text-align: center;
`
