import React from 'react'
import IconItem from '../iconItem'
import amount from '../../images/amount.svg'
import companyIcon from '../../images/company.svg'
import UC from '../../images/person.svg'
import calendar from '../../images/date.svg'
import arrow from '../../images/arrow.svg'
import { CardWrapper, TitleCard, DescriptionCard, Amount, IconsCard, AmountNumber, AmountImage, CardInfo, CardLink } from './styles'

function Card () {
  const description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  const resume = description.substring(0, 140) + '...'

  return (
    <CardWrapper>
      <CardInfo>
        <div>
          <TitleCard>Hola</TitleCard>
          <DescriptionCard>{resume}</DescriptionCard>
        </div>
        <Amount>
          <AmountImage src={amount} alt="amount"/>
          <AmountNumber>45,000</AmountNumber>
        </Amount>
        <IconsCard>
          <IconItem itemIcon={companyIcon} itemData="Empresa" />
          <IconItem itemIcon={UC} itemData="Unidad Compradora" />
          <IconItem itemIcon={calendar} itemData="Inicio de Contrato" />
        </IconsCard>
      </CardInfo>
      <CardLink>
        <img src={arrow} />
      </CardLink>
    </CardWrapper>
  )
}

export default Card
