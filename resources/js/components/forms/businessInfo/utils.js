import React from "react"
import config from "../../../config"

export const renderImage = (defaultValues) => {
  const logoUrl = defaultValues?.logo_url ? `${config.BASE_URL}storage/${defaultValues?.logo_url}` : `${config.BASE_URL}img/Image-not-found.png`

  return React.createElement("img", {
    src: `${logoUrl}`,
    alt: "Logo",
    className: "img-fluid logo-busines"
  });
}