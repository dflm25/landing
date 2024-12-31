import React, { useState, useEffect } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import Select from "react-select"
import { yupResolver } from "@hookform/resolvers/yup"

import Variations from "./variations"
import Pictures from "./pictures"
import { renderImage } from "../businessInfo/utils"
import schema from "./schema"

const Form = ({ onSubmit, defaultValues = {}, options = [] }) => {
    const [file, setFile] = useState(null)
    const [selectedAttributes, setAttributes] = useState([])
    const [selectedPictures, setSelectedPictures] = useState([])

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
        reset(defaultValues)
    }, [defaultValues])

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const submitForm = (data) => {
        onSubmit({ ...data, logo_url: file })
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className="row">
                <div
                    className={`col-md-8 ${
                        defaultValues ? "col-md-8" : "col-md-12"
                    }`}
                >
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
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
                                <div className="col-md-4">
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
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="picture">
                                        Imagen principal
                                    </label>
                                    <input
                                        type="file"
                                        className={`form-control ${
                                            errors.logo_url ? "is-invalid" : ""
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
                            <div className="col-md-12">
                                <label
                                    htmlFor="description"
                                    className="form-label"
                                >
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
                        <div className="col-md-4">
                            {renderImage(defaultValues, "picture")}
                        </div>
                    </div>
                    {defaultValues && (
                        <div className="form-group mt-3">
                            <Controller
                                name="attribute_by_pictures"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        isClearable
                                        options={options}
                                        getOptionValue={(option) => option.id}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(e) => {
                                            onChange(e.id)
                                            setSelectedPictures(e)
                                        }}
                                        value={
                                            options &&
                                            options.filter(
                                                (option) => option.id === value
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
                <div className="col-md-4 text-center">
                    {defaultValues && (
                        <div className="form-group">
                            <Controller
                                name="attributes"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        onChange={(e) => {
                                            onChange(e)
                                            setAttributes(e)
                                        }}
                                        value={value}
                                        options={options}
                                        isMulti
                                        getOptionValue={(option) => option.id}
                                        getOptionLabel={(option) => option.name}
                                    />
                                )}
                            />
                        </div>
                    )}
                    <Variations
                        attributes={selectedAttributes}
                        register={register}
                        control={control}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
                Crear Producto
            </button>
        </form>
    )
}

export default Form
