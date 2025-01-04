import React, { useState } from "react"
import swal from "sweetalert"

import Datatable from "../../components/datatable"
import withView from "../../hoc/tableList"
import Wrapper from "../../components/wrapper"
import Form from "../../components/forms/attributes"

import { columns } from "./schema"
import { create, getById, update, destroy } from "../../services/crudServices"
import { arrayToString, showMessage } from "./util"
import render from "../../utils/render"

const ViewContent = withView(({ data, isLoading, refresh, setRefresh }) => {
    const [showModal, setShowModal] = useState(false)
    const [defaultValue, setDefaultValue] = useState(false)

    const handleSubmit = async (formData) => {
        if (formData.id) {
            showMessage(await update("attributes", formData, formData.id))
        } else {
            showMessage(await create("attributes", formData))
        }
        setRefresh(!refresh)
        setShowModal(false)
    }

    const getToEdit = async (id) => {
        const item = await getById("attributes", id)
        item.attribute_values = arrayToString(item.values)
        setDefaultValue(item)
        setShowModal(true)
    }

    const handleDelete = async (id) => {
        swal({
            title: "Estas seguro?",
            text: "Una vez eliminado, no podrá recuperar este registro!",
            icon: "info",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                showMessage(await destroy(`attributes/${id}`, { status: 0 }))
                setRefresh(!refresh)
            }
        })
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
                actions={{ getToEdit, handleDelete }}
            />
        </Wrapper>
    )
}, "attributes")

const View = () => <ViewContent />

render(View)
