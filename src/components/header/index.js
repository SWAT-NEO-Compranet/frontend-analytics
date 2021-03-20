import React from 'react'
import logo from '../../images/logo1.svg'
import { HeaderContainer, Logo, LogoImg } from './styles'
import PropTypes from 'prop-types'

function Header ({ setState, state }) {
  const handleReset = () => {
    setState({
      ...state,
      dependence: null,
      interval: null
    })
  }
  return (
    <HeaderContainer>
        <Logo to="/" onClick={handleReset}>
          <LogoImg src={logo} />
        </Logo>
    </HeaderContainer>
  )
}

Header.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func
}

export default Header
