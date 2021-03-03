import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 2em;
  background: ${({ theme: { color } }) => color.dark};
  margin-bottom: 1em;
`

export const Logo = styled(Link)`
  width: 150px;
  margin-top: 8px;
`

export const LogoImg = styled.img`
  width: 100%;
`
