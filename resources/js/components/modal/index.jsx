import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const ModalComponent = ({ show, children, title, action, headerClass }) => {
    return (
        <Modal isOpen={show} toggle={() => action(false)} size="lg">
            <ModalHeader
                toggle={() => action(false)}
                className={`${headerClass}`}
            >
                {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
        </Modal>
    )
}

export default ModalComponent
