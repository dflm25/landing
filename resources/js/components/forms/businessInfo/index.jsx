import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import config from "../../../config"
import schema from "./schema"

const BusinessInfoForm = ({ onSubmit, defaultValues }) => {
    const [file, setFile] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    })

    useEffect(() => {}, [defaultValues])

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const submitForm = (data) => {
        onSubmit({ ...data, logo_url: file })
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.name ? "is-invalid" : ""
                                    }`}
                                    onChange={(e) => onChange(e.target.value)}
                                    value={value}
                                />
                            )}
                        />
                        {errors.name && (
                            <div className="invalid-feedback">
                                {errors.name.message}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="logo_url">Logo URL</label>
                        <input
                            type="file"
                            className={`form-control ${
                                errors.logo_url ? "is-invalid" : ""
                            }`}
                            {...register("logo_url")}
                            onChange={handleFileChange}
                        />
                        {errors.logo_url && (
                            <div className="invalid-feedback">
                                {errors.logo_url.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <img
                        src={`${config.BASE_URL}storage/${defaultValues.logo_url}`}
                        alt="Logo"
                        className="img-fluid logo-busines"
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
}

export default BusinessInfoForm
