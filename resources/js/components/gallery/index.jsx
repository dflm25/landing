import React from "react"
import config from "../../config"

export default function Gallery({ data, handleDelete }) {
    return (
        <>
            {data.map((media) => (
                <div key={media.id} className="media-image-item-container">
                    <img
                        src={`${config.BASE_URL}image/${media.id}`}
                        alt={media.alt}
                        className="img-fluid media-image-item"
                    />
                    <a onClick={() => handleDelete(media.id)}>
                        <i className="fa fa-trash" />
                    </a>
                </div>
            ))}
        </>
    )
}
