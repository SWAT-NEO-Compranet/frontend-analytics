import React from 'react'
import { Link } from './styles'
import PropTypes from 'prop-types'

const LinkButton = ({ children, handleSubmit }) => {
  const URL = 'https://neo-analytics-backend.herokuapp.com/api/dependencies/details'

  return (
    <Link onClick={() => handleSubmit(URL)}>
      {children}
    </Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.string,
  // to: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default LinkButton
