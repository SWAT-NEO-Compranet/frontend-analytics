import styled from 'styled-components'

export const Layout = styled.section`
  min-height: 100vh;
  background: ${({ theme: { color } }) => color.dark};
`

export const Hero = styled.header`
  // background: ${({ theme: { color } }) => color.primary};
  padding: 32px 0;
  width: 65%;
  margin: 0 auto;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;

  @media(max-width: 425px) {
    background: red;
    width: 85%;
    height: 150px;
  }
`

export const Logo = styled.div`
  width: 65%;
  margin: 0 auto 24px;
  padding-top: 32px;

  @media(max-width: 425px) {
    width: 85%;
  }
`

export const Info = styled.div`
  // background: red;
  width: 70%;
  z-index: 2;
  position: absolute;
  top: 50%;

  @media(max-width: 425px){
    width: 92%;
  }
`

export const ImageBackground = styled.div`
  // background: aqua;
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;

  @media(max-width: 425px) {
    right: -33px;
    width: 470px;
  }
`

export const Gradient = styled.div`
  background: linear-gradient(90deg, ${({ theme: { color } }) => color.dark} 0%, transparent 100%);
  width: 100%;
  height: 100%;
  position: absolute;

  @media(max-width: 425px) {
    background: linear-gradient(90deg, ${({ theme: { color } }) => color.dark} 25%, transparent 100%);
  }
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  color: ${({ theme: { color } }) => color.light};
  font-size: 24px;
  width: 100%;
  margin-bottom: 48px;
`

export const Description = styled.p`
  color: ${({ theme: { color } }) => color.light};
  font-size: 14px;
  margin-left: 14px;
  margin-bottom: 8px;
`
