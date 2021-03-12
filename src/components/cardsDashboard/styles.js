import styled from 'styled-components'

export const CardsWrapper = styled.section`
  grid-column: 4 / 6;
  display: grid;
  margin-right: 1em;
  max-height: 90%;
  overflow: scroll;
  // margin-left: 90px;

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
