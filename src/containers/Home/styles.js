import styled from "styled-components"

export const Layout = styled.section`
  //color: ${({theme}) => theme.color.primary};
  //background: ${({theme: { color }}) => color.secondary};
`

export const Footer = styled.footer`
  background: ${({theme: { color }}) => color.dark};
  color: ${({theme: { color }}) => color.light};
  padding: 30px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  width: 100%;
  bottom: 0;
`

export const Header = styled.header`
  background: ${({theme: { color }}) => color.primary};
  padding: 40px;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  display: flex;
`

export const Title = styled.h1`
  color: ${({theme: { color }}) => color.light};
  font-size: 36px;
`

export const Description = styled.p`
  color: ${({theme: { color }}) => color.light};
  font-size: 14px;
`

export const Column = styled.div`
  width: 100%;
  position: relative;

  img{
    position: absolute;
    top: -50%;
    left: 25%;
    margin: 0 auto;
  }
`