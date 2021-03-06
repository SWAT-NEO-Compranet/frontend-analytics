import React from 'react'
import gov from '../../images/gov.svg'
import folder from '../../images/folder.svg'
import MainChart from '../MainChart'
import SecondChart from '../SecondChart'
import ThirdChart from '../ThirdChart'
import { ChartsWrapper, Dependence, Icon, Info, Title, Detail, NumberContracts } from './styles'
import PropTypes from 'prop-types'

function ChartDashboard ({ state }) {
  // console.log(state)
  return (
    <ChartsWrapper>
      <Dependence>
        <Icon src={gov} alt="Dependencia" />
        <Info>
          <Title>{state?.name}</Title>
          <Detail>{state?.acronyms}</Detail>
        </Info>
      </Dependence>
      <NumberContracts>
        <Icon src={folder} alt="Contratos encontrados" />
        <Info>
          <Detail>Contratos encontrados</Detail>
          <Title>{state?.contracts.total}</Title>
        </Info>
      </NumberContracts>

      <MainChart />
      <SecondChart />
      <ThirdChart />

    </ChartsWrapper>
  )
}

ChartDashboard.propTypes = {
  state: PropTypes.object
}

export default ChartDashboard
