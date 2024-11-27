import React, { useState } from "react"
import Datatable from "../../components/datatable"
import withView from "../../hoc/tableList"
import Wrapper from "../../components/wrapper"
import Form from "../../components/forms/attributes"

import { columns } from "./schema"
import { create } from "../../services/crudServices"
import render from "../../utils/render"

const ViewContent = withView(({ data, isLoading }) => {
    const handleSubmit = async (formData) => {
        const response = await create("attributes", formData)
        setRefresh(!refresh)
    }

    return (
        <Wrapper title="Atributos" form={<Form onSubmit={handleSubmit} />}>
            <Datatable columns={columns} data={data} isLoading={isLoading} />
        </Wrapper>
    )
}, "attributes")

const View = () => <ViewContent />

render(View)
