import React, { useState } from 'react'
import IconItem from '../iconItem'
import amount from '../../images/amount.svg'
import companyIcon from '../../images/company.svg'
import folder from '../../images/folder.svg'
import calendar from '../../images/date.svg'
import arrow from '../../images/arrow.svg'
import { CardWrapper, TitleCard, Amount, IconsCard, AmountNumber, AmountImage, CardInfo, CardLink } from './styles'
import PropTypes from 'prop-types'
import ModalResult from '../ModalResult'
import { ContractCard, Title, FooterCard, Subtitle, InfoContainer, InfoCell, Campo, Valor, Dependece, LinkOriginal } from '../../containers/Results/styles'

function Card ({ cardsInfo }) {
  // console.log(cardsInfo)
  const description = cardsInfo.contract_title
  const resume = description.substring(0, 140) + '...'

  const transform = { style: 'currency', currency: 'USD' }
  const formatNum = new Intl.NumberFormat('en-US', transform)
  const transformAmount = formatNum.format(cardsInfo.contract_amount)

  const [modal, setModal] = useState(false)

  return (
    <>
      <CardWrapper>
        <CardInfo>
          <TitleCard>{resume}</TitleCard>
          <Amount>
            <AmountImage src={amount} alt="amount"/>
            <AmountNumber>{transformAmount} {cardsInfo.currency}</AmountNumber>
          </Amount>
          <IconsCard>
            <IconItem itemIcon={companyIcon} itemData={cardsInfo.provider} />
            {/* <IconItem itemIcon={UC} itemData="Unidad Compradora" /> */}
            <IconItem itemIcon={calendar} itemData={cardsInfo.published_at} />
          </IconsCard>
        </CardInfo>
        <CardLink onClick={() => setModal(!modal)} >
          <img src={arrow} />
        </CardLink>
        {
          modal && <ModalResult modal={modal} setModal={setModal}>
            <Dependece>{cardsInfo.institution}</Dependece>
            <ContractCard>
              <Title>{description}</Title>
              <Amount>
                <AmountImage src={amount} alt="amount"/>
                <AmountNumber>{cardsInfo.contract_amount} {cardsInfo.currency}</AmountNumber>
              </Amount>
            </ContractCard>
            <FooterCard>
              <IconItem itemIcon={companyIcon} itemData={cardsInfo.provider} />
              <LinkOriginal href={cardsInfo.address_ad} target='_blank' rel='noreferrer'>
                <IconItem itemIcon={folder} itemData="Contrato original" />
              </LinkOriginal>
            </FooterCard>
            <Subtitle>Información</Subtitle>
            <InfoContainer>
              <InfoCell>
                <Campo>Proovedor</Campo>
                <Valor>{cardsInfo.provider}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>Unidad Compradora</Campo>
                <Valor>{cardsInfo.uc_name}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>Responsable - UC</Campo>
                <Valor>{cardsInfo.responsible_uc}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>Tipo de contrato</Campo>
                <Valor>{cardsInfo.contract_type}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>RFC</Campo>
                <Valor>{cardsInfo.rfc == null ? 'Sin registro' : cardsInfo.rfc}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>RFC Verificado</Campo>
                <Valor>{cardsInfo.rfc_verification ? 'Sí' : 'No'}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>Fecha de Publicación</Campo>
                <Valor>{cardsInfo.published_at}</Valor>
              </InfoCell>
              <InfoCell>
                <Campo>Tipo de procedimiento</Campo>
                <Valor>{cardsInfo.procedure_type}</Valor>
              </InfoCell>
            </InfoContainer>
          </ModalResult>
        }
      </CardWrapper>
    </>
  )
}

Card.propTypes = {
  cardsInfo: PropTypes.object
}

export default Card
