import React from 'react'
import { ResponsiveContainer, BarChart, XAxis, Bar, Label, Tooltip, YAxis, CartesianGrid } from 'recharts'
import { Container } from './styles'
import PropTypes from 'prop-types'

// const data = [
//   { name: 'Públicos', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Privados', uv: 500, pv: 2000, amt: 1400 },
//   { name: 'Otros', uv: 500, pv: 2000, amt: 1400 }
// ]

function SecondChart ({ stats }) {
  console.log(stats)
  const transformStats = stats.map(stat => (
    {
      Contratos: stat.contracts,
      Tipo: stat.procedure
    }
  ))
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart data={transformStats}>
        <CartesianGrid stroke="#ccc" />

        <Tooltip cursor={false} />
          <Bar
            dataKey="Contratos"
            fill="#20003D"
            shape="round"
            barSize={40}
            radius={[10, 10, 0, 0]}
          />

          <XAxis
            dataKey="Tipo"
            dy={10}
            height={60}
            type="category"
            style={{
              fontSize: '0.6rem',
              fontFamily: 'poppins'
            }}
            >
          <Label
            value="Tipos de contrato"
            offset={1}
            position="insideBottom"
          />
          </XAxis>
          <YAxis />
        </BarChart>

      </ResponsiveContainer>

    </Container>
  )
}

SecondChart.propTypes = {
  stats: PropTypes.object
}

export default SecondChart
