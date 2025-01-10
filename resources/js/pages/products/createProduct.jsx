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
import { showMessage } from "../../utils/toast"
import { createFormData } from "../../utils/formData"
import {
    tranformProductData,
    transformAttributesAndCombinations,
} from "../../utils/transformers"

const View = () => {
    const [product, setProduct] = useState({})
    const [attributes, setAttributes] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [defaultValues, setDefaultValues] = useState({})

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
            showMessage(await update(`products`, formData, e.id))
        } else {
            const response = await create("products", formData)
            window.location.href = `/products/${response.data.id}/edit`
        }
    }

    const handleVariationSubmit = async (formvalues) => {
        showMessage(
            await create("combinations", {
                ...formvalues,
                product_id: product.id,
            })
        )
        setShowModal(false)
    }

    const handleShowModal = async () => {
        setShowModal(true)
        const response = await getByParam("common", {
            model: "Product",
            action: "customProduct",
            id: product.id,
        })
        const data = transformAttributesAndCombinations(response)
        setDefaultValues(data)
    }

    return (
        <Wrapper title="Crear un producto">
            <div className="row mb-3">
                <div className="col-md-12 text-right">
                    <button
                        type="button"
                        className="btn btn-warning btn-sm   "
                        onClick={handleShowModal}
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
                    defaultValues={defaultValues}
                />
            </Modal>
        </Wrapper>
    )
}
render(View)
