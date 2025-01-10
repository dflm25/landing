import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import BusinessInfoForm from "../../components/forms/businessInfo"
import { create, getByParam } from "../../services/crudServices"
import render from "../../utils/render"
import "react-toastify/dist/ReactToastify.css"

function View() {
    const [businessInfo, setBusinessInfo] = useState({})
    const handleSubmit = async (e) => {
        const formData = new FormData()
        formData.append("name", e.name)
        formData.append("subdomain", e.subdomain)
        e.logo_url && formData.append("logo_url", e.logo_url)

        const response = await create("business-info", formData)
        setBusinessInfo(response.data)
        toast[response.status](response.message)
    }

    useEffect(() => {
        ;(async () => {
            const response = await getByParam("business-info", {
                user_id: "true",
            })
            setBusinessInfo(response)

            introJs()
                .setOptions({
                    disableInteraction: true,
                    nextLabel: "Siguiente",
                    prevLabel: "Anterior",
                    doneLabel: "Listo",
                    steps: [
                        {
                            element: document.querySelector(
                                "#business-info-container"
                            ),
                            title: "Bienvenido!",
                            intro: "Lo primero que debes de hacer es actualizar la informacion de tu cuenta",
                        },
                        {
                            element: document.querySelector("#attributes-menu"),
                            intro: 'Ingresa los attributos de tus productos en esta seccion ejemplo: "Color", "Talla", "Material"',
                        },
                        {
                            element: document.querySelector("#products-menu"),
                            intro: "Agrega tus productos en esta seccion para que tus clientes puedan verlos",
                        },
                        {
                            title: "Farewell!",
                            element: document.querySelector("#pages-menu"),
                            intro: "Finalmente puedes crear una landing page para tu producto y asi vender mas",
                        },
                    ],
                })
                .start()
        })()
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card" id="business-info-container">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                        <BusinessInfoForm
                            onSubmit={handleSubmit}
                            defaultValues={businessInfo}
                        />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

render(View)
