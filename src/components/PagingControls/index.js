import React from 'react'
import PropTypes from 'prop-types'
import { ControllsWrapper, IconPrev, Span, Button, Danger } from './styles'
import arrow from '../../images/arrow.svg'

function PagingControls ({ currentPage, prevPage, nextPage, handleSearch, error }) {
  return (
    (error)
      ? <Danger>{error}</Danger>
      : (<ControllsWrapper>
          { (currentPage !== 1) &&
            <Button onClick={() => handleSearch(prevPage, true)}>
              <IconPrev src={arrow} alt="arrow" />
            </Button> }
          <Span>{currentPage}</Span>
          { nextPage &&
            <Button onClick={() => handleSearch(nextPage, true)}>
              <img src={arrow} alt="arrow" />
            </Button> }
        </ControllsWrapper>)
  )
}

PagingControls.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  handleSearch: PropTypes.func,
  error: PropTypes.string
}

export default PagingControls
