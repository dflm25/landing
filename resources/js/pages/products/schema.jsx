import React from "react"

export const columns = ({}) => {
    return [
        {
            selector: "id",
            name: "Product ID",
            sortable: true,
            maxWidth: "52px",
        },
        {
            selector: "Nombre producto",
            name: "name",
            sortable: true,
        },
        {
            selector: "Imagen principal",
            name: "picture",
            cell: (row) => (
                <img
                    src="row.picture"
                    alt="Product"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
            ),
        },
        {
            selector: "Precio base",
            name: "base_price",
            sortable: true,
        },
        {
            selector: "actions",
            name: "Actions",
            maxWidth: "100px",
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
