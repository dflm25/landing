import React, { useState, useEffect, act } from "react"
import Select from "react-select"
import parse from "html-react-parser"

import { defaultImage } from "../../constants"
import config from "../../../../config"
import { getByParam } from "../../../../services/crudServices"

const Product = (props) => {
    const [myProduct, setMyProduct] = useState({})

    useEffect(() => {
        ;(async () => {
            const data = await getByParam("common", {
                model: "Product",
                action: "byId",
                with: ["images", "attributes", "combinations"],
                id: props.myProduct.id,
            })

            setMyProduct(data)
        })()
    }, [props.myProduct])

    console.log(myProduct.picture)
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img
                        src={`${
                            myProduct.picture
                                ? `${config.BASE_URL}storage/${myProduct.picture}`
                                : defaultImage
                        }`}
                        alt="Product"
                        className="img-fluid rounded mb-3 product-image mainProductImage"
                        id="mainImage"
                    />
                    <div className="d-flex justify-content-between">
                        {myProduct.images
                            ? myProduct.images.map((item) => (
                                  <img
                                      key={`thumbnail-${item.id}`}
                                      src={`${config.BASE_URL}storage/${item.image}`}
                                      alt="Thumbnail 1"
                                      className="thumbnail rounded active"
                                  />
                              ))
                            : [1, 2, 3, 4].map((i) => (
                                  <img
                                      key={`thumbnail-${i}`}
                                      src={defaultImage}
                                      alt="Thumbnail 1"
                                      className="thumbnail rounded active"
                                  />
                              ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className="mb-3">{myProduct.name}</h2>
                    <p className="text-muted mb-4">SKU: WH1000XM4</p>
                    <div className="mb-3">
                        <span className="h4 me-2">{myProduct.base_price}</span>
                        <span className="text-muted">
                            <s>{myProduct.price_discount}</s>
                        </span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <span className="ms-2">4.5 (120 reviews)</span>
                    </div>
                    <p className="mb-4">
                        {parse(myProduct.description || "<span></span>")}
                    </p>
                    <div className="mb-4">
                        <h5>Color:</h5>
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Color selection"
                        >
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="black"
                                checked=""
                            />
                            <label className="btn btn-outline-dark" for="black">
                                Black
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="silver"
                            />
                            <label
                                className="btn btn-outline-secondary"
                                for="silver"
                            >
                                Silver
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="blue"
                                autocomplete="off"
                            />
                            <label
                                className="btn btn-outline-primary"
                                for="blue"
                            >
                                Blue
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label for="quantity" className="form-label">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            value="1"
                            min="1"
                            style={{ width: "80px" }}
                        />
                    </div>
                    <button className="btn btn-primary btn-lg mb-3 me-2">
                        <i className="bi bi-cart-plus"></i> Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary btn-lg mb-3">
                        <i className="bi bi-heart"></i> Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}

const product = {
    label: "Producto",
    fields: {
        myProduct: {
            type: "custom",
            render: ({ name, onChange, value }) => {
                const [list, setList] = useState([])

                useEffect(() => {
                    ;(async () => {
                        const data = await getByParam("common", {
                            model: "Product",
                            action: "all",
                        })

                        setList(data)
                    })()
                }, [])

                return (
                    <Select
                        name={name}
                        options={list}
                        defaultValue={value}
                        onChange={(e) => onChange(e)}
                        getOptionValue={(option) => option.id}
                        getOptionLabel={(option) => option.name}
                    />
                )
            },
        },
    },
    render: (props) => {
        return <Product {...props} />
    },
}

export default product
