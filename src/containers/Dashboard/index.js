import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import { Layout, DashboardContent } from './styles'
// MenuForm, Print Menu
// import { Label, Input, Dropdown } from '../../components/Form/styles'
import PropTypes from 'prop-types'

const Dashboard = ({ children }) => {
  // const [active, setActive] = useState(true)

  // const toogleMenu = () => {
  //   setActive(!active)
  // }

  return (
    <>
      <Header />
      <Layout>
        <DashboardContent>
          {children}
        </DashboardContent>
      <Footer />
      </Layout>
    </>
  )
}

Dashboard.propTypes = {
  children: PropTypes.string
}

export default Dashboard
