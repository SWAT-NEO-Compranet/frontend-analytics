import React from 'react'
import { ResponsiveContainer, BarChart, XAxis, Bar, Label } from 'recharts'
import { Container } from './styles'

const data = [
  { name: 'Públicos', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Privados', uv: 500, pv: 2000, amt: 1400 },
  { name: 'Otros', uv: 500, pv: 2000, amt: 1400 }
]

function SecondChart () {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart data={data}>
          <Bar
            dataKey="uv"
            fill="#20003D"
            shape="round"
            barSize={30}
            radius={[10, 10, 0, 0]}
          />
          {/* <CartesianGrid stroke="#ccc" /> */}
          <XAxis
            dataKey="name"
            dy={10}
            height={60}
            type="category"
            style={{
              fontSize: '0.9rem',
              fontFamily: 'poppins'
            }}
            >
          <Label
            value="Tipos de contrato"
            offset={1}
            position="insideBottom"
          />
          </XAxis>

        </BarChart>
      </ResponsiveContainer>

    </Container>
  )
}

export default SecondChart
