import React from 'react'
import PropTypes from 'prop-types'
import { ControllsWrapper, IconPrev, Span, Button } from './styles'
import arrow from '../../images/arrow.svg'

function PagingControls ({ currentPage, prevPage, nextPage, handleSearch }) {
  return (
    <ControllsWrapper>
      { (currentPage !== 1) &&
        <Button onClick={() => handleSearch(prevPage)}>
          <IconPrev src={arrow} alt="arrow" />
        </Button> }
      <Span>{currentPage}</Span>
      { nextPage &&
        <Button onClick={() => handleSearch(nextPage)}>
          <img src={arrow} alt="arrow" />
        </Button> }
    </ControllsWrapper>
  )
}

PagingControls.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  handleSearch: PropTypes.func
}

export default PagingControls
