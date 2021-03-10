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
  border-radius: 1em;
  // margin: 1em 0; 
  padding: 1.5em .7em;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const Description = styled.p`
  color: ${({ theme: { color } }) => color.dark};
`

export const Title = styled.h1`
  color: ${({ theme: { color } }) => color.primary};
  font-size: 1.2em;
  margin-bottom: 1em;
`

export const Dependece = styled.span`
  color: ${({ theme: { color } }) => color.secondary};
  padding: 0 .7em;
`

export const Subtitle = styled.h2`
  color: ${({ theme: { color } }) => color.dark};
  font-size: 1em;
  margin: 0 .7em .5em;
`

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 2.5em .7em;
`

export const LinkOriginal = styled.a`
  color: ${({ theme: { color } }) => color.secondary};
  font-weight: bold; 
`

export const RightIcons = styled.div`
  display: flex;
  img{
    margin-left: 20px;
  }
`

export const InfoContainer = styled.section`
  // background: ${({ theme: { color } }) => color.gray};
  display: flex;
  flex-direction: column;
  // padding: 20px 40px; 
  border-radius: 16px;
  // flex-wrap: wrap;
  gap: 1em;
`

export const InfoCell = styled.div`
  // background: ${({ theme: { color } }) => color.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em .7em;
  // border: 1px solid gray;
  border-radius: .4em;
  flex-basis: 49%;
  box-shadow: ${({ theme }) => theme.shadow};
  /* width: 500px;
  margin: 0 auto; */
`

export const Campo = styled.h3`
  color: ${({ theme: { color } }) => color.dark};
  font-weight: normal;
  font-size: .8em;
`

export const Valor = styled.p`
  color: ${({ theme: { color } }) => color.primary};
  font-size: .8em;
`
