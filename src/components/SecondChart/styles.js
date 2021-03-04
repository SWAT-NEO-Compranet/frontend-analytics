import styled from 'styled-components'

export const Container = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background: ${({ theme: { color } }) => color.light};
  border-radius: 16px;

  @media (max-width: 426px) {
    grid-column: 1 / 6;
  }
`
