import React from 'react'
import Card from '../card'
import { CardsWrapper, Subtitle } from './styles'
import PropTypes from 'prop-types'

// const cards = [1, 2, 3, 4, 5, 6, 7, 8]

function CardDashboard ({ cards }) {
  console.log(cards)

  return (
    <CardsWrapper>
      <Subtitle>Contratos</Subtitle>
      {
        cards?.contracts.data.map(item => <Card key={item} />)
      }
    </CardsWrapper>
  )
}

CardDashboard.propTypes = {
  cards: PropTypes.object
}

export default CardDashboard
