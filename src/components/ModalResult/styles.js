import styled from 'styled-components'

export const Modal = styled.div`
  // background: rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.shadow};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4em 0 0;
  height: 127vh;
`

export const ModalWrapper = styled.div`
  background: white;
  max-width: 85%;
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 0 auto;
  padding: 1.5em 4.5em 0;
  // width: 600px;
  display: flex;
  flex-direction: column;
`

export const ExitButtonTop = styled.div`
  background: ${({ theme: { color } }) => color.secondary};
  color: white;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`

export const ExitButtonBottom = styled.button`
  border: none;
  background: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.gray};
  border-radius: .5em;
  padding: 1em;
  margin: 2em 0 1.5em;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
`
