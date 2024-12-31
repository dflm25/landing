import React from "react"

export const columns = ({}) => {
    return [
        {
            selector: (row) => row.name,
            name: "Nombre",
            sortable: true,
        },
        {
            selector: (row) => row.base_price,
            name: "Precio",
            sortable: true,
            cell: (row) =>
                `${parseFloat(row.base_price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}`,
        },
        {
            selector: (row) => row.picture,
            name: "picture",
            cell: (row) => (
                <div className="p-2">
                    <img
                        src={`storage/${row.picture}`}
                        alt="Product"
                        className="img-fluid"
                        style={{ maxWidth: "80px" }}
                    />
                </div>
            ),
        },
        {
            name: "Actions",
            maxWidth: "100px",
            cell: (row) => (
                <div>
                    <a
                        href={`/products/${row.id}/edit`}
                        className="btn btn-warning btn-sm mr-2"
                    >
                        <i className="fa fa-edit"></i>
                    </a>
                    <a href="button" className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </a>
                </div>
            ),
        },
    ]
}
