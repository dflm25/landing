import React from "react"

export const columns = ({}) => {
    return [
        {
            selector: "id",
            name: "Campaign ID",
            sortable: true,
            maxWidth: "52px",
        },
        {
            selector: "title",
            name: "Name",
            sortable: true,
        },
        {
            selector: "url",
            name: "URL",
            cell: (row) => (
                <CopyToClipboard onCopy={onCopy} text={row.url}>
                    <button className="btn btn-block text-left">
                        <i className="fa fa-copy"></i> {row.url}
                    </button>
                </CopyToClipboard>
            ),
        },
        {
            selector: "phone",
            name: "Phone",
            sortable: true,
        },
        {
            selector: "url",
            name: "Image",
            cell: (row) => (
                <img
                    src={row.url}
                    alt="Business"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
            ),
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
