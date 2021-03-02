import React, { useState } from 'react'
import ChartDashboard from "../../components/chartsDashboard"
import CardDashboard from "../../components/cardsDashboard"
import arrow from "../../images/arrow.svg"
import { Layout, Menu, DashboardContent, ToogleBar, ToogleButton, ToogleArrow } from "./styles"

const Dashboard = () => {
  const [active, setActive] = useState(true)

  const toogleMenu = () => {
    setActive(!active)
  }

  return (
    <Layout>
      {
        active ? 
        <Menu showed>
          Menu
        </Menu> :
        <Menu>
         Menu
        </Menu> 
      }
      <ToogleBar>
        <ToogleButton onClick={toogleMenu}>
          {active 
          ? <ToogleArrow src={arrow} showed />
          : <ToogleArrow src={arrow} />}
        </ToogleButton>
      </ToogleBar>
      <DashboardContent>
        <ChartDashboard />
        <CardDashboard />
      </DashboardContent>
    </Layout>
  )
}

export default Dashboard
