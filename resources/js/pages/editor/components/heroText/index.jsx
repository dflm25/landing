import React from "react"

import { fontSizes } from "../../constants"

const HeroText = ({ title, subtitle, button }) => {
    return (
        <div className="container text-center py-2">
            <div className="p-5 mb-4 lc-block">
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h2 className="fw-bold display-2">{title}</h2>
                    </div>
                </div>
                <div className="lc-block mb-5">
                    <div editable="rich">
                        <p
                            className="lead"
                            style={{ fontSize: subtitle?.size }}
                        >
                            {subtitle.label}
                        </p>
                    </div>
                </div>
                {button.show && (
                    <div className="lc-block mb-2">
                        <a
                            className="btn btn-primary"
                            href="#"
                            role="button"
                            style={{ fontSize: button.size }}
                        >
                            {button.label}
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

const heroText = {
    label: "Hero Text",
    fields: {
        title: { type: "text" },
        subtitle: {
            type: "object",
            label: "Propiedades del texto",
            objectFields: {
                label: { type: "text", label: "subtitle" },
                size: {
                    type: "select",
                    label: "Tamaño",
                    options: fontSizes,
                },
            },
        },
        button: {
            type: "object",
            label: "Propiedades del botón",
            objectFields: {
                label: { type: "text", label: "Label del boton" },
                show: {
                    type: "radio",
                    label: "Mostrar",
                    options: [
                        { label: "Mostrar", value: true },
                        { label: "Ocultar", value: false },
                    ],
                },
                size: {
                    type: "select",
                    label: "Tamaño",
                    options: fontSizes,
                },
            },
        },
    },
    defaultProps: {
        title: "Hero",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nun",
        buttonText: "Click me, I'm a button",
        subtitle: {
            label: "Subtitle",
            size: "16px",
        },
        button: {
            label: "Click me, I'm a button",
            show: true,
        },
    },
    render: (props) => {
        return <HeroText {...props} />
    },
}

export default heroText
