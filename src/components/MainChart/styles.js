import styled from 'styled-components'

export const Container = styled.div`
  //background: green;
  grid-column: 1 / 6;
  grid-row: 2;
  margin-top: 1.5em;
  background: ${({ theme: { color } }) => color.light};
  border-radius: 1em;
`
