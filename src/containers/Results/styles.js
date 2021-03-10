import styled from 'styled-components'

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 80%;
  min-height: 100vh;
`

export const Logo = styled.img`
  margin: 20px 0;
`

export const ContractCard = styled.div`
  background: ${({ theme: { color } }) => color.gray};
  border-radius: 16px;
  margin: 1em 0; 
  padding: 20px 30px;
`

export const Description = styled.p`
  color: ${({ theme: { color } }) => color.dark};
`

export const Title = styled.h1`
  color: ${({ theme: { color } }) => color.dark};
  font-size: 1.2em;
`

export const Subtitle = styled.h2`
  color: ${({ theme: { color } }) => color.dark};
  font-size: 1.2em;
  margin: 20px 0 10px 40px;
`

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`

export const RightIcons = styled.div`
  display: flex;
  img{
    margin-left: 20px;
  }
`

export const InfoContainer = styled.section`
  background: ${({ theme: { color } }) => color.gray};
  display: flex;
  padding: 20px 40px; 
  border-radius: 16px;
  flex-wrap: wrap;
  gap: 15px 1%;
`

export const InfoCell = styled.div`
  background: ${({ theme: { color } }) => color.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  border: 1px solid gray;
  border-radius: 8px;
  flex-basis: 49%;
`

export const Campo = styled.h3`
  font-size: 1rem;
  color: ${({ theme: { color } }) => color.dark};
`

export const Valor = styled.p`
  color: ${({ theme: { color } }) => color.dark};
`
