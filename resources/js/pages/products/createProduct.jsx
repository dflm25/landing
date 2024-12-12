import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper"
import FormProduct from "../../components/forms/products"
import render from "../../utils/render"
import { create, getById, getByParam } from "../../services/crudServices"

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
        const formData = new FormData()
        formData.append("name", e.name)
        formData.append("base_price", e.base_price)
        formData.append("description", e.description)
        e.picture && formData.append("picture", e.logo_url)

        const response = await create("products", formData)
        window.location.href = `/products/${response.data.id}/edit`
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
