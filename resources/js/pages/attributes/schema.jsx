import React from "react"

export const columns = ({}) => {
    return [
        {
            selector: (row) => row.name,
            name: "Nombre",
            sortable: true,
        },
        {
            name: "base_price",
            sortable: true,
            cell: (row) => <div>row.attributesValues</div>,
        },
        {
            selector: "actions",
            name: "Actions",
            cell: (row) => (
                <div>
                    <a href="button" className="btn btn-info btn-sm">
                        <i className="fa fa-eye"></i>
                    </a>
                    <a
                        href={`/admin/campaigns/${row.id}/edit`}
                        className="btn btn-warning btn-sm ml-2"
                    >
                        <i className="fa fa-edit"></i>
                    </a>
                </div>
            ),
        },
    ]
}
