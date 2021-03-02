import React from 'react'
import { Link } from './styles'
import PropTypes from 'prop-types'

const LinkButton = ({ children, handleSubmit }) => {
  return(
    <Link onClick={handleSubmit}>
      {children}
    </Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default LinkButton;
