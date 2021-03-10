import React, { useState } from 'react'
import IconItem from '../iconItem'
import amount from '../../images/amount.svg'
import companyIcon from '../../images/company.svg'
// import UC from '../../images/person.svg'
import calendar from '../../images/date.svg'
import arrow from '../../images/arrow.svg'
import { CardWrapper, TitleCard, Amount, IconsCard, AmountNumber, AmountImage, CardInfo, CardLink } from './styles'
import PropTypes from 'prop-types'
import ModalResult from '../ModalResult'
import { ContractCard, Title, FooterCard, Subtitle, InfoContainer, InfoCell, Campo, Valor } from '../../containers/Results/styles'

function Card ({ cardsInfo }) {
  console.log(cardsInfo)
  const description = cardsInfo.contract_title
  const resume = description.substring(0, 140) + '...'

  const [modal, setModal] = useState(false)

  return (
    <>
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
            <p>{cardsInfo.institution}</p>
            <ContractCard>
              <Title>{description}</Title>
            </ContractCard>
            <p>{cardsInfo.contract_amount} {cardsInfo.currency}</p>
            <FooterCard>
              <IconItem itemIcon={companyIcon} itemData="Empresa" />
              <IconItem itemIcon={amount} itemData="5,000" />
              <IconItem itemIcon={amount} itemData="Enlace" />
            </FooterCard>
            <Subtitle>Información</Subtitle>
            <InfoContainer>
              <InfoCell>
                <Campo>Provedor</Campo>
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
