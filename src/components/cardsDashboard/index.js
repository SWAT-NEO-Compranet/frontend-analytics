import React from 'react'
import Card from '../card'
import { CardsWrapper, Subtitle, CardsScroll } from './styles'
import { LoadingCard } from '../Loading'
import PropTypes from 'prop-types'

function CardDashboard ({ cards, loading }) {
  const cardsLoad = [1, 2, 3, 4, 5]

  return (
    <CardsWrapper>
      <Subtitle>Contratos</Subtitle>
      <CardsScroll>
      {loading && cardsLoad.map(card => <LoadingCard key={card} />)}
      {
        cards?.contracts.data !== 0
          ? cards?.contracts.data.map(card => <Card key={card.id} cardsInfo={card} />)
          : <span>Sin contratos</span>
      }
      </CardsScroll>
    </CardsWrapper>
  )
}

CardDashboard.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool
}

export default CardDashboard
