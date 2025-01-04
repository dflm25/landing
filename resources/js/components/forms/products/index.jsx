import React, { useState, useEffect } from "react"
import Editor from "react-simple-wysiwyg"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"
import { yupResolver } from "@hookform/resolvers/yup"

import Pictures from "./pictures"
import { renderImage, renderThumbnail } from "../businessInfo/utils"
import schema from "./schema"

const Form = ({ onSubmit, defaultValues = {}, options = [] }) => {
    const [file, setFile] = useState(null)
    const [selectedAttributes, setAttributes] = useState([])
    const [selectedPictures, setSelectedPictures] = useState([])
    const [thumbnail, setThumbnail] = useState(null)

    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    })

    useEffect(() => {
        if (defaultValues?.attributes) {
            setAttributes(defaultValues.attributes)
        }

        reset(defaultValues)
    }, [defaultValues])

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
            const reader = new FileReader()
            reader.onloadend = () => {
                setFile(reader.result)
            }
            setThumbnail(URL.createObjectURL(e.target.files[0]))
        }
    }

    const submitForm = (data) => {
        onSubmit({ ...data, logo_url: file })
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="row">
                    <div
                        className={`col-md-12 ${
                            defaultValues ? "col-md-8" : "col-md-12"
                        }`}
                    >
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                id="name"
                                                className="form-control"
                                                {...register("name")}
                                            />
                                            {errors.name && (
                                                <p className="text-danger">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="base_price"
                                                className="form-label"
                                            >
                                                Precio
                                            </label>
                                            <input
                                                id="base_price"
                                                type="number"
                                                className="form-control text-right"
                                                {...register("base_price")}
                                            />
                                            {errors.price && (
                                                <p className="text-danger">
                                                    {errors.base_price.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label
                                                htmlFor="base_price"
                                                className="form-label"
                                            >
                                                Descuento
                                            </label>
                                            <input
                                                id="price_discount"
                                                type="number"
                                                className="form-control text-right"
                                                {...register("price_discount")}
                                            />
                                            {errors.price && (
                                                <p className="text-danger">
                                                    {
                                                        errors.price_discount
                                                            .message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="picture">
                                                Imagen principal
                                            </label>
                                            <input
                                                type="file"
                                                className={`form-control ${
                                                    errors.logo_url
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                {...register("picture")}
                                                onChange={handleFileChange}
                                            />
                                            {errors.picture && (
                                                <div className="invalid-feedback">
                                                    {errors.picture.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {!thumbnail
                                    ? renderImage(defaultValues, "picture")
                                    : renderThumbnail(thumbnail)}
                            </div>
                            <div className="col-md-12">
                                <label
                                    htmlFor="description"
                                    className="form-label"
                                >
                                    Descripción
                                </label>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <Editor
                                            value={value}
                                            onChange={(e) => onChange(e)}
                                        />
                                    )}
                                />

                                {errors.description && (
                                    <p className="text-danger">
                                        {errors.description.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        {defaultValues && (
                            <div className="form-group mt-3">
                                <label htmlFor="attribute_by_pictures">
                                    Imagen por variacion
                                </label>
                                <Controller
                                    name="attribute_by_pictures"
                                    control={control}
                                    render={({
                                        field: { onChange, value },
                                    }) => (
                                        <Select
                                            isClearable
                                            options={options}
                                            getOptionValue={(option) =>
                                                option.id
                                            }
                                            getOptionLabel={(option) =>
                                                option.name
                                            }
                                            onChange={(e) => {
                                                onChange(e.id)
                                                setSelectedPictures(e)
                                            }}
                                            value={
                                                options &&
                                                options.filter(
                                                    (option) =>
                                                        option.id === value
                                                )
                                            }
                                        />
                                    )}
                                />
                            </div>
                        )}
                        <Pictures
                            attributes={selectedPictures}
                            register={register}
                            control={control}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-info mt-4">
                    {!defaultValues?.id
                        ? "Crear Producto"
                        : "Actualizar Producto"}
                </button>
            </form>
        </>
    )
}

export default Form
