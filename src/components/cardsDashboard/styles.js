import styled from 'styled-components'

export const CardsWrapper = styled.section`
  grid-column: 4 / 6;
  // display: grid;
  // max-height: 90%;
  // overflow: scroll;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2;
    margin-bottom: 3em;
  }

  @media print{
    overflow: initial;
    page-break-after: always;
  }
`

export const CardsScroll = styled.div`
  // background: salmon;
  padding-top: 1em;
  max-height: 900px;
  overflow: scroll;

  @media (max-width: 768px) {
    max-height: 465px;
  }
`

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: .5em;
  text-align: center;
`
