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
  // console.log(stats)
  // console.log(stats.map(stat => stat.total))
  const amount = stats[0].total
  // console.log(amount)
  const transform = { style: 'currency', currency: 'USD' }
  const formatNum = new Intl.NumberFormat(transform)
  console.log(formatNum.format(amount))

  const transformStats = stats.map(stat => (
    {
      total: formatNum.format(stat.total),
      month: stat.month,
      contracts: stat.contracts
    }
  ))
  // console.log(transformStats)

  return (
    <Container>
      {/* <ResponsiveContainer width="100%" height="40%">
        <AreaChart data={transformStats} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='contracts' fill={color.green} stroke={color.primary} stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart data={transformStats} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='total' fill={color.red} stackId='1' />
        </AreaChart>
      </ResponsiveContainer> */}
      <ResponsiveContainer>
        <AreaChart data={transformStats}>
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='contracts' fill={color.red} />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

MainChart.propTypes = {
  stats: PropTypes.object
}

export default MainChart
