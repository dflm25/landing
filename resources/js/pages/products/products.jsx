import React from "react"
import Datatable from "../../components/datatable"
import withView from "../../hoc/tableList"
import { columns } from "./schema"
import Wrapper from "../../components/wrapper"
import render from "../../utils/render"

const ViewContent = withView(({ data, isLoading }) => {
    return (
        <Wrapper title="Editor de landings" formUrl="/products/create">
            <Datatable columns={columns} data={data} isLoading={isLoading} />
        </Wrapper>
    )
}, "products")

const View = () => <ViewContent />

render(View)
