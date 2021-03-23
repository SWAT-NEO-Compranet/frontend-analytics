import React from 'react'
import { Layout, Hero, Title, Description, Logo, Info, ImageBackground, Image, Gradient } from './styles'
import photo from '../../images/file.png'
import logo from '../../images/logo.svg'
import PropTypes from 'prop-types'

const Home = ({ children }) => {
  return (
    <Layout>
      <Logo><img src={logo} alt="Analitycs logo"/></Logo>
      <Hero>
        <Info>
          <Title>Busca contratos públicos de las dependencias del gobierno mexicano.</Title>
          <Description>Busca fácilmente</Description>
          { children }
        </Info>
        <ImageBackground>
          <Gradient></Gradient>
          <Image src={photo} alt="Fotografía de documentos"/>
        </ImageBackground>
      </Hero>
    </Layout>
  )
}

Home.propTypes = {
  children: PropTypes.string
}

export default Home
