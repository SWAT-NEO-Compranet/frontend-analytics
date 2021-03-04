import styled from 'styled-components'

export const Container = styled.div`
  grid-column: 1 / 4;
  grid-row: 3;
  background: ${({ theme: { color } }) => color.light};
  border-radius: 16px;
`
