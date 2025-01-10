import React from "react"

function Social({ title }) {
    return (
        <section class="logo-cloud py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">{title}</h2>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center align-items-center">
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-apple fs-1"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-microsoft fs-1"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-google fs-1"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-reddit fs-1"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-facebook fs-1"></i>
                        </div>
                    </div>
                    <div class="col">
                        <div class="logo-item text-center">
                            <i class="bi bi-twitter fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const social = {
    label: "Redes sociales",
    fields: {
        title: {
            type: "text",
            label: "Heading",
            placeholder: "Enter a heading",
        },
    },
    defaultProps: {
        title: "Siguenos en nuestras redes socialess",
    },
    render: (props) => {
        return <Social {...props} />
    },
}

export default social
