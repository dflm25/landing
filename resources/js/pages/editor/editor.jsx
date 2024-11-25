import React from "react"
import Datatable from "../../components/datatable"
import Wrapper from "../../components/wrapper"
import Form from "../../components/forms/businessInfo"

import { columns } from "./schema"
import render from "../../utils/render"

export default function View() {
    return (
        <Wrapper title="Editor de landings" form={<Form />}>
            <Datatable columns={columns} />
        </Wrapper>
    )
}

render(View)
