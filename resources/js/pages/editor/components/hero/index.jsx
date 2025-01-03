import React from "react"
import { ReactMediaLibrary } from "react-media-library"

import { images } from "./constants"

function Hero({ title, intro, heroImage }) {
    console.log(heroImage)

    return (
        <div className="row flex-lg-row-reverse align-items-center bg-light col-xxl-10 mx-auto py-4">
            <div className="col-lg-4 ms-lg-4">
                <div className="lc-block mb-4">
                    <img
                        className="img-fluid shadow"
                        src={heroImage.url}
                        alt="Photo by Kaloyan Draganov"
                    />
                </div>
            </div>
            <div className="col-lg-7 ps-lg-4">
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h1 className="rfs-30 fw-bold">{title}</h1>
                    </div>
                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <p className="lead">{intro}</p>
                    </div>
                </div>
                <div className="lc-block">
                    <a
                        className="btn btn-primary btn-lg"
                        href="#"
                        role="button"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}

const heroImage = {
    label: "Hero image",
    fields: {
        title: {
            type: "text",
            label: "Heading",
            placeholder: "Enter a heading",
        },
        intro: {
            type: "textarea",
            label: "Intro",
            placeholder: "Enter an intro",
        },
        //
        imageProperties: {
            type: "object",
            label: "Propiedades de la imagen",
            objectFields: {
                url: { type: "text", label: "URL de la imagen" },
                alt: { type: "text", label: "Image alt" },
                image: {
                    type: "custom",
                    render: ({ name, onChange, value }) => {
                        const [isOpen, setIsOpen] = React.useState(false)

                        return (
                            <div>
                                <ReactMediaLibrary
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                    fileLibraryList={images}
                                    filesSelectCallback={(files) => {
                                        console.log("Select files", files)
                                    }}
                                    multiSelect={false}
                                    fileUploadCallback={(file) =>
                                        console.log("Upload file", file)
                                    }
                                />
                                <button
                                    className="btn btn-info btn-sm w-100"
                                    onClick={() => setIsOpen(true)}
                                >
                                    Galleria
                                </button>
                            </div>
                        )
                    },
                },
                position: {
                    type: "radio",
                    label: "Position imagen",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
            },
        },
    },
    defaultProps: {
        title: "Hero",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Nunc et metus id ligula malesuada placerat sit",
        heroImage: {
            url: "https://images.unsplash.com/photo-1525004866327-07739b938272?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8Mnx8fDE2MzQ1NTA4MDc&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080",
            position: "left",
            alt: "Photo by Kaloyan Draganov",
        },
    },
    render: (props) => {
        return <Hero {...props} />
    },
}

export default heroImage
