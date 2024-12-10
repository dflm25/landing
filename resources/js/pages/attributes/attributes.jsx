import React, { useState } from "react"
import Datatable from "../../components/datatable"
import withView from "../../hoc/tableList"
import Wrapper from "../../components/wrapper"
import Form from "../../components/forms/attributes"

import { columns } from "./schema"
import { create, getById, update } from "../../services/crudServices"
import { arrayToString } from "./util"
import render from "../../utils/render"

const ViewContent = withView(({ data, isLoading }) => {
    const [showModal, setShowModal] = useState(false)
    const [defaultValue, setDefaultValue] = useState(false)

    const handleSubmit = async (formData) => {
        if (formData.id) {
            const response = await update("attributes", formData)
        } else {
            const response = await create("attributes", formData)
        }
        setRefresh(!refresh)
    }

    const getToEdit = async (id) => {
        const item = await getById("attributes", id)
        item.attribute_values = arrayToString(item.values)
        setDefaultValue(item)
        setShowModal(true)
    }

    return (
        <Wrapper
            title="Atributos"
            form={<Form onSubmit={handleSubmit} defaultValues={defaultValue} />}
            showModal={showModal}
            setShowModal={setShowModal}
        >
            <Datatable
                columns={columns}
                data={data}
                isLoading={isLoading}
                actions={{ getToEdit }}
            />
        </Wrapper>
    )
}, "attributes")

const View = () => <ViewContent />

render(View)
