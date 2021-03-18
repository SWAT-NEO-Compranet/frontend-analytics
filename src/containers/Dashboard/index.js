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
        {/* {
          active
            ? <Menu showed>
            <MenuForm showed>
              <Label>
                <span>Dependencia</span>
                <Input />
              </Label>
              <Label>
                Temporalidad
                <Dropdown>
                  <option></option>
                  <option value="ultimo-mes" name="ultimo-mes">Último mes</option>
                  <option value="3-meses" name="3-meses">3 meses</option>
                  <option value="6-meses" name="6-meses">6 meses</option>
                  <option value="ultimo-anho" name="ultimo-anho">Último año</option>
                  <option value="2020" name="2020">2020</option>
                  <option value="2019" name="2019">2019</option>
                </Dropdown>
              </Label>
            </MenuForm>
            <Print onClick={window.print}>Imprimir</Print>
          </Menu>
            : <Menu>
            <MenuForm>
            <Label>
                <span>Dependencia</span>
                <Input />
              </Label>
              <Label>
                Temporalidad
                <Dropdown>
                  <option></option>
                  <option value="ultimo-mes" name="ultimo-mes">Último mes</option>
                  <option value="3-meses" name="3-meses">3 meses</option>
                  <option value="6-meses" name="6-meses">6 meses</option>
                  <option value="ultimo-anho" name="ultimo-anho">Último año</option>
                  <option value="2020" name="2020">2020</option>
                  <option value="2019" name="2019">2019</option>
                </Dropdown>
              </Label>
            </MenuForm>
          </Menu>
        } */}

        {/* <ToogleBar>
          <ToogleButton onClick={toogleMenu}>
            {active
              ? <ToogleArrow src={arrow} showed />
              : <ToogleArrow src={arrow} />}
          </ToogleButton>
        </ToogleBar> */}
        <DashboardContent>
          {children}
        </DashboardContent>
      </Layout>
      <Footer />
    </>
  )
}

Dashboard.propTypes = {
  children: PropTypes.string
}

export default Dashboard
