import React from 'react'
import { Layout, Footer, Header, Title, Description, Column, Logo, Illustration } from './styles'
import Form from '../../components/Form'
import illustration from '../../images/Illustration.svg'
import logo from '../../images/logo.svg'

const Home = () => {
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
      <Form />
      <Footer>
        Analytics
      </Footer>
    </Layout>
  )
}

export default Home
