import React from 'react'
import gov from '../../images/gov.svg'
import folder from '../../images/folder.svg'
import MainChart from '../MainChart'
import SecondChart from '../SecondChart'
// import ThirdChart from '../ThirdChart'
// import Loading from '../Loading'
import { Loading } from '../Loading'
import { ChartsWrapper, Dependence, Icon, Info, Title, Detail, NumberContracts } from './styles'
import PropTypes from 'prop-types'

function ChartDashboard ({ state }) {
  // console.log(state)
  return (
    <ChartsWrapper>
      <Dependence>
        <Icon src={gov} alt="Dependencia" />
        <Info>
          {
            state.loading
              ? <Title>Buscando dependencia...</Title>
              : <>
              <Title>{state?.search.name}</Title>
              <Detail>{state?.search.acronyms}</Detail>
              </>
          }

        </Info>
      </Dependence>
      <NumberContracts>
        <Icon src={folder} alt="Contratos encontrados" />
        <Info>
          {
            state.loading
              ? <Title>Buscando contratos...</Title>
              : <>
              <Title>{state?.search.contracts.total}</Title>
              <Detail>Contratos</Detail>
              </>
          }
        </Info>
      </NumberContracts>
      {state.loading
        ? <Loading />
        : <MainChart stats={state?.search?.stats} />
      }
      {state.loading
        ? <Loading row='3 / 5' />
        : <SecondChart stats={state?.search?.contact_types} />
      }
      {/* <ThirdChart /> */}

    </ChartsWrapper>
  )
}

ChartDashboard.propTypes = {
  state: PropTypes.object
}

export default ChartDashboard
