import React from "react"

export default function Hero({ title, intro, heroImage }) {
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
