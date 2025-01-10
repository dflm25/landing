import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import render from "../../utils/render"
import "react-toastify/dist/ReactToastify.css"

function View() {
    useEffect(() => {
        ;(async () => {})()
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card" id="business-info-container">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools"></div>
                    </div>
                    <div className="card-body"></div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

render(View)
