import React from 'react'
import { Modal, ModalWrapper, ExitButton } from './styles'
import PropTypes from 'prop-types'

function ModalResult ({ modal, setModal, children }) {
  return (
    <Modal>
        <ModalWrapper>
          <ExitButton onClick={() => setModal(!modal)}>
            X
          </ExitButton>
          {children}
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
