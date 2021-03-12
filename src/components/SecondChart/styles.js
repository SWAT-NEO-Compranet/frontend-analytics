import styled from 'styled-components'

export const Container = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: ${({ theme: { color } }) => color.light};
  border-radius: 16px;
  padding: 1em 0 .5em 0;

  @media (max-width: 426px) {
    grid-column: 1 / 6;
  }
`
