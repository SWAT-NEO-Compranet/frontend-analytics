import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts'
import { Container } from './styles'

const data = [
  { month: 'Ene', Contratos: 10, Dinero: 400 },
  { month: 'Jun', Contratos: 38, Dinero: 800 },
  { month: 'Dic', Contratos: 22, Dinero: 200 }
]

const color = {
  purple: '#6900C6',
  red: '#DA009A',
  green: '#00C8AA'
}

function MainChart () {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="40%">
        <AreaChart data={data} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='Contratos' fill={color.purple} stroke={color.primary} stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="50%">
        <AreaChart data={data} syncId="graph1">
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='Dinero' fill={color.purple} stackId='1' />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default MainChart
