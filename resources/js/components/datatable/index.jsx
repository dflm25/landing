import React from "react"
import DataTable from "react-data-table-component"
import { customStyles } from "./styles"

function Datatable({ data, columns, actions = {}, loading }) {
    return (
        <DataTable
            progressPending={loading}
            columns={columns({ ...actions })}
            data={data?.data}
            customStyles={customStyles}
            pagination
            paginationServer
            // onChangePage={actions?.handlePage}
            // onChangeRowsPerPage={actions?.setPerPage}
            paginationTotalRows={data?.total || 0}
        />
    )
}

export default Datatable
