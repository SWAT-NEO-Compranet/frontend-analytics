import React from 'react'
import { Layout, Header, Title, Description, Column, Logo, Illustration } from './styles'
import illustration from '../../images/Illustration.svg'
import logo from '../../images/logo.svg'
// import Footer from '../../components/Footer'
// import { FooterWrapper } from '../../components/Footer/styles'
import PropTypes from 'prop-types'

const Home = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Column>
          <Logo src={logo} alt="logo"/>
          <Title>
          Bienvenido a Analytics
          </Title>
          <Description>
            Busca fácilmente contratos federales y estatales del gobierno de México y sus dependencias.
            <br/>
            Personaliza tu búsqueda y encuentra los archivos públicos.
          </Description>
        </Column>
        <Column>
          <Illustration src={illustration} alt="illustration"/>
        </Column>
      </Header>
      { children }
      {/* <FooterWrapper absolute >Footer</FooterWrapper> */}
    </Layout>
  )
}

Home.propTypes = {
  children: PropTypes.string
}

// LinkButton.propTypes = {
//   children: PropTypes.string,
//   // to: PropTypes.string,
//   handleSubmit: PropTypes.func
// }

export default Home
