import React from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Wrapper from "../../components/wrapper"
import render from "../../utils/render"

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    price: yup
        .number()
        .required("El precio es obligatorio")
        .positive("El precio debe ser positivo"),
    description: yup.string().required("La descripción es obligatoria"),
})

const View = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "variations",
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Wrapper title="Crear un producto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-8">
                        <label htmlFor="name" className="form-label">
                            Nombre
                        </label>
                        <input
                            id="name"
                            className="form-control"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-danger">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="price" className="form-label">
                            Precio
                        </label>
                        <input
                            id="price"
                            type="number"
                            className="form-control"
                            {...register("price")}
                        />
                        {errors.price && (
                            <p className="text-danger">
                                {errors.price.message}
                            </p>
                        )}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="description" className="form-label">
                            Descripción
                        </label>
                        <textarea
                            id="description"
                            className="form-control"
                            {...register("description")}
                        />
                        {errors.description && (
                            <p className="text-danger">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Crear Producto
                </button>
            </form>

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((item, index) => (
                    <div key={item.id} className="row mb-3">
                        <div className="col-md-3">
                            <label>Variation ID</label>
                            <input
                                className="form-control"
                                {...register(
                                    `variations.${index}.variation_id`
                                )}
                            />
                            {errors.variations?.[index]?.variation_id && (
                                <p className="text-danger">
                                    {
                                        errors.variations[index].variation_id
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                        <div className="col-md-3">
                            <label>Imagen</label>
                            <input
                                type="file"
                                className="form-control"
                                {...register(`variations.${index}.picture`)}
                            />
                            {errors.variations?.[index]?.picture && (
                                <p className="text-danger">
                                    {errors.variations[index].picture.message}
                                </p>
                            )}
                        </div>
                        <div className="col-md-3">
                            <label>Price</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                {...register(`variations.${index}.price`)}
                            />
                            {errors.variations?.[index]?.price && (
                                <p className="text-danger">
                                    {errors.variations[index].price.message}
                                </p>
                            )}
                        </div>
                        <div className="col-md-3">
                            <label>Variation Value</label>
                            <input
                                className="form-control"
                                {...register(
                                    `variations.${index}.variation_value`
                                )}
                            />
                            {errors.variations?.[index]?.variation_value && (
                                <p className="text-danger">
                                    {
                                        errors.variations[index].variation_value
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                        <div className="col-md-3 d-flex align-items-end">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => remove(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="row mt-3">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                                append({
                                    product_id: "",
                                    variation_id: "",
                                    picture: "",
                                    price: "",
                                    variation_value: "",
                                })
                            }
                        >
                            Add Variation
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Create Product
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    )
}
render(View)
