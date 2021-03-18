import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 60px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  align-items: center;
  padding-left: 4.5em;
  background: ${({ theme: { color } }) => color.gray};
  margin-bottom: 2em;

  @media print{
    display: none;
  }
`

export const Logo = styled(Link)`
  width: 135px;
  margin-top: 8px;
`

export const LogoImg = styled.img`
  width: 100%;
`
