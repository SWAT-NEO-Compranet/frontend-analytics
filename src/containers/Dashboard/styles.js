import styled from "styled-components"

export const Layout = styled.section`
  display: flex;
  height: 100vh;
`

export const Menu = styled.aside`
  background: ${({theme}) => theme.color.light};
  width: ${({showed}) => showed ? '300px' : '0px'};
  transition: .6s;
`

export const ToogleBar = styled.div`
  background: ${({theme: {color}}) => color.secondary};
  width: 40px;
`

export const ToogleButton = styled.div`
  background: #00a78e;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ToogleArrow = styled.img`
  transform: ${({showed}) => showed ? `rotate(180deg)` : null};
  width: 50%;
  transition: .3s;
`


export const DashboardContent = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`