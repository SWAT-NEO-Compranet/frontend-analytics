import styled from 'styled-components'

export const Modal = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 6em 0 0;
  height: 100vh;
`

export const ModalWrapper = styled.div`
  background: white;
  max-width: 85%;
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 0 auto;
  padding: 1.3em 2em;
  display: flex;
  flex-direction: column;
`

export const ExitButton = styled.div`
background: ${({ theme: { color } }) => color.gray};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
