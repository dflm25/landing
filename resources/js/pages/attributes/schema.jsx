import React from "react"

export const columns = ({ getToEdit, handleDelete }) => {
    return [
        {
            selector: (row) => row.name,
            name: "Nombre",
            sortable: true,
        },
        {
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
            name: "Actions",
            cell: (row) => (
                <div className="w-100 text-center">
                    <a
                        href="#"
                        className="btn btn-warning btn-sm ml-2"
                        onClick={() => getToEdit(row.id)}
                    >
                        <i className="fa fa-edit"></i>
                    </a>
                    <a
                        href="#"
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleDelete(row.id)}
                    >
                        <i className="fa fa-trash"></i>
                    </a>
                </div>
            ),
        },
    ]
}
