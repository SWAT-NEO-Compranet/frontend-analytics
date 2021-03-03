import styled from 'styled-components'

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const Header = styled.header`
  background: ${({ theme: { color } }) => color.primary};
  padding: 40px;
  width: 70%;
  margin: 60px auto 0;
  border-radius: 16px;
  display: flex;
  max-height: 240px;

  @media(max-width:1023px){
    flex-direction:column;
    max-height: initial;
  }
`

export const Logo = styled.img``

export const Illustration = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media(min-width: 1024px){
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    width: initial;
  }
`

export const Title = styled.h1`
  color: ${({ theme: { color } }) => color.light};
  font-size: 36px;
  @media(max-width:1439px){
    font-size: 24px;
  }
`

export const Description = styled.p`
  color: ${({ theme: { color } }) => color.light};
  font-size: 14px;
`

export const Column = styled.div`
  width: 100%;
  position: relative;
`

export const Footer = styled.footer`
  background: ${({ theme: { color } }) => color.dark};
  color: ${({ theme: { color } }) => color.light};
  padding: 30px;
  text-align: center;
  font-weight: bold;
`
