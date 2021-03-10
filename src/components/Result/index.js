import React from 'react'
import { ResultDash, ResultTitle, ResultTime } from './styles'
import PropTypes from 'prop-types'

function Result ({ dependence, interval }) {
  return (
    <ResultDash>
      <ResultTitle>
        <span>Resultado</span>
        {
          dependence ? <h1>{dependence}</h1> : <h1>Sin búsqueda</h1>
        }
      </ResultTitle>
      <ResultTime>

        {
          interval
            ? <>
              <span>Intervalo</span>
              <h2>{interval}</h2>
              </>
            : null
        }
      </ResultTime>
    </ResultDash>
  )
}

Result.propTypes = {
  dependence: PropTypes.string,
  interval: PropTypes.string
}

export default Result
