import React from "react"
import Modal from "../modal"

function Wrapper({ title = "", children = {}, form = null, modalTitle = "" }) {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools">
                            {form && (
                                <a
                                    href="#"
                                    className="btn btn-block btn-info btn-sm"
                                    onClick={() => setShowModal(true)}
                                >
                                    Agregar
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="card-body">{children}</div>
                </div>
            </div>
            <Modal show={showModal} action={setShowModal} title={modalTitle}>
                {form}
            </Modal>
            {/* <Toast /> */}
        </div>
    )
}

export default Wrapper
