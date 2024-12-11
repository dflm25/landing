import React from "react"

export const columns = ({ getToEdit }) => {
    return [
        {
            selector: (row) => row.name,
            name: "Nombre",
            sortable: true,
        },
        {
            name: "base_price",
            sortable: true,
            cell: (row) => (
                <div>
                    {row?.values?.map((item, index) => (
                        <h3
                            key={`value-${item.id}`}
                            className="badge badge-secondary mr-2 p-2 display-6"
                        >
                            {item.value}
                        </h3>
                    ))}
                </div>
            ),
        },
        {
            selector: "actions",
            name: "Actions",
            maxWidth: "100px",
            cell: (row) => (
                <div className="mw-100 text-right">

                    {row.name.includes(['Color', 'Talla']) ? <><a
                        href="#"
                        className="btn btn-warning btn-sm ml-2"
                        onClick={() => getToEdit(row.id)}
                    >
                        <i className="fa fa-edit"></i>
                    </a>
                    <a href="button" className="btn btn-danger btn-sm ml-2">
                        <i className="fa fa-trash"></i>
                    </a></> : <span>...</span>}
                </div>
            ),
        },
    ]
}
