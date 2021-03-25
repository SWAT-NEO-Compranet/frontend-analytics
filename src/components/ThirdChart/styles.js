import styled from 'styled-components'

export const Container = styled.div`
  grid-column: 4 / 6;
  grid-row: 3 / 4;
  background: pink;

  @media (max-width: 426px) {
    grid-column: 1 / 6;
    grid-row: 4 / 5;

  }
`
