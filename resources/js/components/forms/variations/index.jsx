import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"

import Combinations from "./combinations"
import { combineAttributes } from "../../../utils/transformers"

export default function Variations({
    options = [],
    onSubmit,
    defaultValues = {},
}) {
    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
        resetField,
        setValue,
    } = useForm({
        // resolver: yupResolver(schema),
        defaultValues,
    })

    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues])

    return (
        <div className="col-md-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="attributes text-left">
                        Variaciones de Producto
                    </label>
                    <Controller
                        name="attributes"
                        control={control}
                        defaultValue={defaultValues?.attributes}
                        render={({ field: { onChange, value, ref } }) => (
                            <Select
                                inputRef={ref}
                                onChange={(e) => {
                                    onChange(e)
                                    setValue(
                                        "combinations",
                                        combineAttributes(e)
                                    )
                                }}
                                value={value}
                                options={options}
                                isMulti
                                getOptionValue={(option) => option.id}
                                getOptionLabel={(option) => option.name}
                                isOptionDisabled={() =>
                                    watch("attributes")?.length >= 2
                                }
                            />
                        )}
                    />
                </div>
                <Controller
                    name="combinations"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Combinations
                            data={value}
                            register={register}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                {watch("attributes")?.length > 0 && (
                    <button type="submit" className="btn btn-info mt-4">
                        {!defaultValues?.id
                            ? "Crear Producto"
                            : "Actualizar Producto"}
                    </button>
                )}
            </form>
        </div>
    )
}
