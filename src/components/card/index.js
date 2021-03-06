import React from 'react'
import IconItem from '../iconItem'
import amount from '../../images/amount.svg'
import companyIcon from '../../images/company.svg'
import UC from '../../images/person.svg'
import calendar from '../../images/date.svg'
import arrow from '../../images/arrow.svg'
import { CardWrapper, TitleCard, Amount, IconsCard, AmountNumber, AmountImage, CardInfo, CardLink } from './styles'
import PropTypes from 'prop-types'

function Card ({ cardsInfo }) {
  console.log(cardsInfo)
  // const description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  const description = cardsInfo.contract_title
  const resume = description.substring(0, 140) + '...'

  return (
    <CardWrapper>
      <CardInfo>
        <div>
          <TitleCard>{resume}</TitleCard>
        </div>
        <Amount>
          <AmountImage src={amount} alt="amount"/>
          <AmountNumber>{cardsInfo.contract_amount} {cardsInfo.currency}</AmountNumber>
        </Amount>
        <IconsCard>
          <IconItem itemIcon={companyIcon} itemData="Empresa" />
          <IconItem itemIcon={UC} itemData="Unidad Compradora" />
          <IconItem itemIcon={calendar} itemData="Inicio de Contrato">
            {cardsInfo.published_at}
          </IconItem>
        </IconsCard>
      </CardInfo>
      <CardLink to="/results">
        <img src={arrow} />
      </CardLink>
    </CardWrapper>
  )
}

Card.propTypes = {
  cardsInfo: PropTypes.object
}

export default Card
