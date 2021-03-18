import styled from 'styled-components'

export const Layout = styled.section`
  display: flex;
  height: 115vh;

  @media (max-width: 768px) {
    height: 173vh;
  }

  @media (max-width: 426px) {
    height: 205vh;
  }
`

export const Menu = styled.aside`
  //background: ${({ theme }) => theme.color.gray};
  width: ${({ showed }) => showed ? '300px' : '0px'};
  transition: .6s;
  padding: ${({ showed }) => showed ? '1em' : 0};
  box-shadow: ${({ theme }) => theme.shadow};


  @media (max-width: 768px) {
    display: none;
  }
`

export const MenuForm = styled.div`
  opacity: ${({ showed }) => showed ? '' : '0'};
  transition: .4s;
`

export const ToogleBar = styled.div`
  background: ${({ theme: { color } }) => color.gray};
  width: 30px;
  border-top-right-radius: .5em;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ToogleButton = styled.div`
    background: ${({ theme: { color } }) => color.light};
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: .5em;
`

export const ToogleArrow = styled.img`
  transform: ${({ showed }) => showed ? 'rotate(180deg)' : null};
  width: 50%;
  transition: .3s;
`

export const DashboardContent = styled.main`
  width: 95vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: 80px 1fr;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 950px 500px;
  }

  @media (max-width: 426px) {
    grid-template-rows: 1200px 500px;
  }
`

export const Print = styled.button`
  display: block;
  margin: 20px auto;
  text-decoration: none;
  padding: 1em 2em;
  border-radius: 8px;
  background: ${({ theme: { color } }) => color.secondary};
  border: none;
  color: ${({ theme: { color } }) => color.gray};
  font-weight: bold;
  text-transform: uppercase;
  position:relative;
  margin-top: 90vh;
`
