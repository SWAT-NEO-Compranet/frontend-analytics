import React from 'react'
import gov from '../../images/gov.svg'
import folder from '../../images/folder.svg'
import MainChart from '../MainChart'
import SecondChart from '../SecondChart'
import ThirdChart from '../ThirdChart'
import { ChartsWrapper, Dependence, Icon, Info, Title, Detail, NumberContracts } from './styles'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

function ChartDashboard ({ state }) {
  // console.log(state)
  return (
    <ChartsWrapper>
      <Dependence>
        <Icon src={gov} alt="Dependencia" />
        <Info>
          {
            state
              ? <>
                  <Title>{state?.name}</Title>
                  <Detail>{state?.acronyms}</Detail>
                </>
              : <Title>Buscando dependencia</Title>
          }

        </Info>
      </Dependence>
      <NumberContracts>
        <Icon src={folder} alt="Contratos encontrados" />
        <Info>
          <Detail>Contratos encontrados</Detail>
          {
            state ? <Title>{state?.contracts.total}</Title> : <Title>Sin contratos</Title>
          }
        </Info>
      </NumberContracts>

      { state == null
        ? <Loader className="Loader"
          type="Grid"
          color="#6900C6"
          height={100}
          width={100}
          />
        : <MainChart stats={state.stats} />
      }

      <SecondChart />
      <ThirdChart />

    </ChartsWrapper>
  )
}

ChartDashboard.propTypes = {
  state: PropTypes.object
}

export default ChartDashboard
