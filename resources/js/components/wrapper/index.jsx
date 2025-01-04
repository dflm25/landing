import React from "react"
import Modal from "../modal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Wrapper({
    title = " ",
    children = {},
    form = null,
    formUrl = null,
    modalTitle = "",
    showModal,
    setShowModal,
}) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools">
                            {form && (
                                <a
                                    className="btn btn-block btn-info btn-sm"
                                    onClick={() => {
                                        setShowModal(true)
                                    }}
                                >
                                    Agregar
                                </a>
                            )}
                            {formUrl && (
                                <a
                                    href={formUrl}
                                    className="btn btn-block btn-info btn-sm"
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
            <ToastContainer limit={1} />
        </div>
    )
}

export default Wrapper
