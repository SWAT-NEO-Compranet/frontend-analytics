import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import { Container } from './styles'
import PropTypes from 'prop-types'

// const data = [
//   { month: 'Ene', Contratos: 10, Dinero: 400 },
//   { month: 'Jun', Contratos: 38, Dinero: 800 },
//   { month: 'Dic', Contratos: 22, Dinero: 200 }
// ]

const color = {
  purple: '#6900C6',
  red: '#DA009A',
  green: '#00C8AA'
}

function MainChart ({ stats }) {
  console.log(stats)

  return (
    <Container>
      <ResponsiveContainer width="100%" height="40%">
        <AreaChart data={stats} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='contracts' fill={color.green} stroke={color.primary} stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart data={stats} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='total' fill={color.red} stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

MainChart.propTypes = {
  stats: PropTypes.object
}

export default MainChart
