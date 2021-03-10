import styled from 'styled-components'

export const ResultDash = styled.div`
  // background: salmon;
  color: ${({ theme: { color } }) => color.dark};
  margin: 0 2em;
  grid-column: 1 / 4;
  // grid-row: 1 / 2;
  max-height: 100%;
  display: flex;
`

export const ResultTitle = styled.div`
  margin-right: 3em;
`

export const ResultTime = styled.div``
