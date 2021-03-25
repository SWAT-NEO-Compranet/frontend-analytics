import styled, { keyframes } from 'styled-components'

// Skeleton animation
const transition = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
`

export const Loading = styled.div`
  grid-column: 1 / 6;
  grid-row: ${props => props.row || 2};
  // width: 100%;
  // height: 100%;
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(90deg, transparent 0%, #E8E8E8 50%, transparent 100%);
    display: block;
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    top: 0;
    animation: ${transition} 1.1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`

export const LoadingCard = styled.div`
  width: 75%;
  min-height: 225px;
  margin: 0 auto 1em;
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(90deg, transparent 0%, #E8E8E8 50%, transparent 100%);
    display: block;
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    top: 0;
    animation: ${transition} 1.1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`
