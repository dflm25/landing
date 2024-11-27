import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ColorPalette from "../../colorPalette"
import schema from "./schema"

const BusinessInfoForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            id="name"
                            {...register("name")}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="logo_url">Logo URL</label>
                        <input
                            type="file"
                            className={`form-control ${errors.logo_url ? "is-invalid" : ""}`}
                            id="logo"
                            {...register("logo_url")}
                        />
                        {errors.logo_url && <div className="invalid-feedback">{errors.logo_url.message}</div>}
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <h3>Selecciona tus colores</h3>
                    <Controller 
                        name="color_palette" 
                        control={control} 
                        render={({ field }) => <ColorPalette {...field} />} 
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default BusinessInfoForm
