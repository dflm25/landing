import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper"
import FormProduct from "../../components/forms/products"
import render from "../../utils/render"
import {
    create,
    getById,
    getByParam,
    update,
} from "../../services/crudServices"
import { createFormData } from "../../utils/formData"

const View = () => {
    const [product, setProduct] = useState(null)
    const [attributes, setAttributes] = useState(null)

    useEffect(() => {
        ;(async () => {
            const root =
                document.getElementById("root").attributes["data-id"].value
            if (root) {
                setProduct(await getById("products", root))
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
        }
        // window.location.href = `/products/${response.data.id}/edit`
    }
    return (
        <Wrapper title="Crear un producto">
            <FormProduct
                onSubmit={handleSubmit}
                defaultValues={product}
                options={attributes}
            />
        </Wrapper>
    )
}
render(View)
