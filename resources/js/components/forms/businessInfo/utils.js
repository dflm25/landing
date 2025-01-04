import React from "react"
import config from "../../../config"

export const renderImage = (defaultValues, field) => {
    if (defaultValues === null) {
        return React.createElement("img", {
            src: `${config.BASE_URL}img/Image-not-found.png`,
            alt: "Logo",
            className: "img-fluid logo-busines align-self-center",
        })
    } else {
        const logoUrl = defaultValues[field]
            ? `${config.BASE_URL}storage/${defaultValues[field]}`
            : `${config.BASE_URL}img/Image-not-found.png`

        return React.createElement("img", {
            src: `${logoUrl}`,
            alt: "Logo",
            className: "img-fluid logo-busines align-self-center",
        })
    }
}

export const renderThumbnail = (image) => {
    return React.createElement("img", {
        src: image,
        alt: "Logo",
        className: "img-fluid logo-busines align-self-center",
    })
}
