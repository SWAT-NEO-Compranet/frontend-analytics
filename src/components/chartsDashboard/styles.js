import styled from 'styled-components'

export const ChartsWrapper = styled.section`
  grid-column: 1 / 4;
  margin: 0 2em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 12% 450px 250px;
  grid-gap: 1em;

  @media (max-width: 426px) {
    grid-template-rows: 7% 500px 260px 240px;
    margin: 0 1em;
  }
`

export const Dependence = styled.div`
  background: ${({ theme: { color } }) => color.gray};
  max-height: 120px;
  border-radius: 1em;
  grid-column: 1 / 4;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  box-shadow: ${({ theme }) => theme.shadow};

  @media (max-width: 426px) {
    
  }
`

export const NumberContracts = styled(Dependence)`
  grid-column: 4 / 6;
`

export const Icon = styled.img`
  width: 55px;

  @media (max-width: 426px) {
    //width: 35px; 
    display: none;
  }
`

export const Info = styled.div`
  margin-left: 1em;

  @media (max-width: 426px) {
    margin-left: 0;
  }
`

export const Title = styled.h2`
  color: ${({ theme: { color } }) => color.primary};
  font-size: 1em;

  @media (max-width: 426px) {
    font-size: .8em;
  }
`

export const Detail = styled.p`
  font-size: .7em;

  @media (max-width: 426px) {
    font-size: .55em;
  }
`
