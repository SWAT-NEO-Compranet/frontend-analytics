import React from 'react'
import Card from '../card'
import { CardsWrapper, Subtitle } from './styles'
import PropTypes from 'prop-types'

// const cards = [1, 2, 3, 4, 5, 6, 7, 8]

function CardDashboard ({ cards }) {
  // console.log(cards?.contracts.data)

  return (
    <CardsWrapper>
      <Subtitle>Contratos</Subtitle>
      {
        cards?.contracts.data.map(card => <Card key={card.id} cardsInfo={card} />)
      }
    </CardsWrapper>
  )
}

CardDashboard.propTypes = {
  cards: PropTypes.array
}

export default CardDashboard
