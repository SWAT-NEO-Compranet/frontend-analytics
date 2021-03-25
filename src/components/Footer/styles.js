import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: white;
  color: ${({ theme: { color } }) => color.light};
  padding: 30px;
  margin-top: 2em;
  text-align: center;
  font-weight: bold;

  // pending
  position: ${(props) => props.absolute ? 'absolute' : null};
  bottom: 0;
  left: 0;
  width: 100%;

  @media print{
      display: none;
  }
`
