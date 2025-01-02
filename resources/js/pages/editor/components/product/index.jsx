import React, { useState, useEffect, act } from "react"
import Select from "react-select"
import { getByParam } from "../../../../services/crudServices"

const Product = (props) => {
    const [myProduct, setMyProduct] = useState({})

    useEffect(() => {
        ;(async () => {
            const data = await getByParam("common", {
                model: "Product",
                action: "byId",
                id: props.myProduct.id,
            })

            setMyProduct(data)
        })()
    }, [props.myProduct])

    return (
        <div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                        alt="Product"
                        class="img-fluid rounded mb-3 product-image"
                        id="mainImage"
                    />
                    <div class="d-flex justify-content-between">
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                            alt="Thumbnail 1"
                            class="thumbnail rounded active"
                            onclick="changeImage(event, this.src)"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                            alt="Thumbnail 2"
                            class="thumbnail rounded"
                            onclick="changeImage(event, this.src)"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                            alt="Thumbnail 3"
                            class="thumbnail rounded"
                            onclick="changeImage(event, this.src)"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                            alt="Thumbnail 4"
                            class="thumbnail rounded"
                            onclick="changeImage(event, this.src)"
                        />
                    </div>
                </div>

                <div class="col-md-6">
                    <h2 class="mb-3">{myProduct.name}</h2>
                    <p class="text-muted mb-4">SKU: WH1000XM4</p>
                    <div class="mb-3">
                        <span class="h4 me-2">{myProduct.base_price}</span>
                        <span class="text-muted">
                            <s>{myProduct.base_price}</s>
                        </span>
                    </div>
                    <div class="mb-3">
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-half text-warning"></i>
                        <span class="ms-2">4.5 (120 reviews)</span>
                    </div>
                    <p class="mb-4">{myProduct.description}</p>
                    <div class="mb-4">
                        <h5>Color:</h5>
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Color selection"
                        >
                            <input
                                type="radio"
                                class="btn-check"
                                name="color"
                                id="black"
                                autocomplete="off"
                                checked=""
                            />
                            <label class="btn btn-outline-dark" for="black">
                                Black
                            </label>
                            <input
                                type="radio"
                                class="btn-check"
                                name="color"
                                id="silver"
                                autocomplete="off"
                            />
                            <label
                                class="btn btn-outline-secondary"
                                for="silver"
                            >
                                Silver
                            </label>
                            <input
                                type="radio"
                                class="btn-check"
                                name="color"
                                id="blue"
                                autocomplete="off"
                            />
                            <label class="btn btn-outline-primary" for="blue">
                                Blue
                            </label>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="quantity" class="form-label">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="quantity"
                            value="1"
                            min="1"
                            style={{ width: "80px" }}
                        />
                    </div>
                    <button class="btn btn-primary btn-lg mb-3 me-2">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-outline-secondary btn-lg mb-3">
                        <i class="bi bi-heart"></i> Add to Wishlist
                    </button>
                    <div class="mt-4">
                        <h5>Key Features:</h5>
                        <ul>
                            <li>Industry-leading noise cancellation</li>
                            <li>30-hour battery life</li>
                            <li>Touch sensor controls</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const product = {
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
