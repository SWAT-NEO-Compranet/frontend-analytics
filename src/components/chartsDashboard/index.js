import React from 'react'
import gov from "../../images/gov.svg"
import folder from "../../images/folder.svg"
import { ChartsWrapper, Dependence, Icon, Info, Title, Detail, NumberContracts } from "./styles"

function ChartDashboard() {
  return (
    <ChartsWrapper>
      <Dependence>
        <Icon src={gov} alt="Dependencia" />
        <Info>
          <Title>Dependencia encontrada</Title>
          <Detail>Nivel: federal</Detail>
        </Info>
      </Dependence>
      <NumberContracts>
        <Icon src={folder} alt="Contratos encontrados" />
        <Info>
          <Detail>Contratos encontrados</Detail>
          <Title>3,564</Title>
        </Info>
      </NumberContracts>
    </ChartsWrapper>
  )
}

export default ChartDashboard
