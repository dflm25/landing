import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper"
import FormProduct from "../../components/forms/products"
import render from "../../utils/render"
import Modal from "../../components/modal"
import Variations from "../../components/forms/variations"
import {
    create,
    getById,
    getByParam,
    update,
} from "../../services/crudServices"
import { createFormData } from "../../utils/formData"
import { tranformProductData } from "../../utils/transformers"

const View = () => {
    const [product, setProduct] = useState({})
    const [attributes, setAttributes] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        ;(async () => {
            const root =
                document.getElementById("root").attributes["data-id"].value
            if (root) {
                setProduct(tranformProductData(await getById("products", root)))
            }
            setAttributes(await getByParam("attributes", { action: "all" }))
        })()
    }, [])

    const handleSubmit = async (e) => {
        const formData = createFormData(e)

        if (e.id) {
            const response = await update(`products`, formData, e.id)
        } else {
            const response = await create("products", formData)
            window.location.href = `/products/${response.data.id}/edit`
        }
    }

    const handleVariationSubmit = async (formvalues) => {
        console.log("formvalues::::", formvalues)
    }

    return (
        <Wrapper title="Crear un producto">
            <div className="row mb-3">
                <div className="col-md-12 text-right">
                    <button
                        type="button"
                        className="btn btn-warning btn-sm   "
                        onClick={() => {
                            setShowModal(true)
                        }}
                    >
                        Variaciones
                    </button>
                </div>
            </div>
            <FormProduct
                onSubmit={handleSubmit}
                defaultValues={product}
                options={attributes}
            />
            <Modal show={showModal} action={setShowModal}>
                <Variations
                    options={attributes}
                    onSubmit={handleVariationSubmit}
                />
            </Modal>
        </Wrapper>
    )
}
render(View)
