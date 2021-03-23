import React from 'react'
import Card from '../card'
import { CardsWrapper, Subtitle, CardsScroll } from './styles'
import { LoadingCard } from '../Loading'
import PropTypes from 'prop-types'
import PagingControls from '../PagingControls'

function CardDashboard ({ cards, loading, handleSearch }) {
  const cardsLoad = [1, 2, 3, 4, 5]

  return (
    <CardsWrapper>
      <Subtitle>Contratos</Subtitle>
      <CardsScroll>
      {loading
        ? cardsLoad.map(card => <LoadingCard key={card} />)
        : (cards?.contracts.data !== 0
            ? cards?.contracts.data.map(card => <Card key={card.id} cardsInfo={card} />)
            : <span>Sin contratos</span>)
      }
      {
        (cards?.contracts.data !== 0) &&
          <PagingControls
            currentPage={cards?.contracts.current_page}
            prevPage={cards?.contracts.prev_page_url}
            nextPage={cards?.contracts.next_page_url}
            handleSearch={handleSearch}
          />
      }

      </CardsScroll>
    </CardsWrapper>
  )
}

CardDashboard.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool,
  handleSearch: PropTypes.func
}

export default CardDashboard
