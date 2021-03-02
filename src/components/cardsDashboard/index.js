import React from 'react'
import Card from "../card"
import { CardsWrapper, Subtitle } from "./styles"

const cards = [1,2,3,4,5,6,7,8]

function CardDashboard() {
  return (
    <CardsWrapper>
      <Subtitle>Contratos</Subtitle>
      {
        cards.map(item => <Card key={item} />)
      }
    </CardsWrapper>
  )
}

export default CardDashboard
