import React from 'react'
import { Modal, ModalWrapper, ExitButtonTop, ExitButtonBottom } from './styles'
import PropTypes from 'prop-types'

function ModalResult ({ modal, setModal, children }) {
  return (
    <Modal>
        <ModalWrapper>
          <ExitButtonTop onClick={() => setModal(!modal)}>
            X
          </ExitButtonTop>
          {children}
          <ExitButtonBottom onClick={() => setModal(!modal)}>Cerrar</ExitButtonBottom>
        </ModalWrapper>
    </Modal>
  )
}

ModalResult.propTypes = {
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  children: PropTypes.object,
  description: PropTypes.string
}

export default ModalResult
