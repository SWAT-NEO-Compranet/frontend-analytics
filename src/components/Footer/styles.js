import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: ${({ theme: { color } }) => color.dark};
  color: ${({ theme: { color } }) => color.light};
  padding: 30px;
  text-align: center;
  font-weight: bold;

  @media print{
      display: none;
  }
`
