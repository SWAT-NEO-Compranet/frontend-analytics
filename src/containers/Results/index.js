import React from 'react'
import {
  Layout, Logo, ContractCard, Title, Subtitle, Description, FooterCard, RightIcons, InfoContainer, InfoCell, Campo, Valor
} from './styles'
import logo from '../../images/logo2.svg'
import IconItem from '../../components/iconItem/index'
import amount from '../../images/amount.svg'
import company from '../../images/company.svg'

const Results = () => {
  const contrato = {
    title: 'Amet m  inim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }

  const contador = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Layout>
      <Logo src={logo} />
      <ContractCard>
        <Title>
          {contrato.title}
        </Title>
        <Description>
          {contrato.description}
        </Description>
        <FooterCard>
          <IconItem itemIcon={amount} itemData="5,000,000" />
          <RightIcons>
            <IconItem itemIcon={company} itemData="Empresa" />
            <IconItem itemIcon={amount} itemData="Enlace al contrato completo" />
          </RightIcons>
        </FooterCard>
      </ContractCard>
      <Subtitle>
        Información
      </Subtitle>
      <InfoContainer>
        {contador.map((item) => (
          <InfoCell key={item}>
            <Campo>Campo</Campo>
            <Valor>Valor</Valor>
          </InfoCell>
        ))}
      </InfoContainer>
    </Layout>
  )
}

export default Results
