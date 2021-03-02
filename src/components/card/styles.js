import styled from "styled-components"

export const CardWrapper = styled.div`
  background: ${({theme: {color}}) => color.light};
  color: ${({theme: { color }}) => color.dark};
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  border-left: 4px solid ${({theme: {color}}) => color.secondary};
  height: 250px;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
`

export const CardInfo = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`

export const CardLink = styled.div`
  padding: 0 1em;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #EDEDED;
    transition: .2s;
  }
`

export const TitleCard = styled.h3`
  font-size: 1em;
`

export const DescriptionCard = styled.p`
  font-size: .75em;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
`

export const AmountImage = styled.img`
  width: 1.8em;
`

export const AmountNumber = styled.span`
  //background: rgba(105, 0, 198, 0.5);
  //color: ${({theme: {color}}) => color.light};
  color: ${({theme: {color}}) => color.primary};
  font-weight: bold;
  font-size: .9em;
  padding: 0 .8em;
  
`

export const IconsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`