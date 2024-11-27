import React from "react"

import BusinessInfoForm from "../../components/forms/businessInfo"
import {create} from "../../services/crudServices"
import render from "../../utils/render"

function View() {

    const handleSubmit = async (e) => {
        e.logo_url = e.logo_url[0]
        const formData = new FormData()
        formData.append("name", e.name)
        formData.append("logo_url", e.logo_url)

        const response = await create("business-info", formData)
        console.log(response)
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                        <BusinessInfoForm onSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

render(View)
