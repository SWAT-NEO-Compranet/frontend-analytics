import React from 'react'
import { Layout, Footer, Header, Title, Description, Column} from './styles'
import Illustration from '../../images/Illustration.svg'

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Header>
        <Column>
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
          <img src={Illustration} alt="illustration"/>
        </Column>
      </Header>
      <Footer>
        Analytics
      </Footer>
    </Layout>
  )
}

export default Home
