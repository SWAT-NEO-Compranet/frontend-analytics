import React from 'react'
import logo from "../../images/logo.svg"
import { HeaderContainer, Logo, LogoImg } from "./styles"

function Header() {
  return (
    <HeaderContainer>
        <Logo to="/">
          <LogoImg src={logo} />
        </Logo>
    </HeaderContainer>
  )
}

export default Header
