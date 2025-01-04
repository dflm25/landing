import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"

import Combinations from "./combinations"
import { combineAttributes } from "../../../utils/transformers"

export default function Variations({
    options = {},
    onSubmit,
    defaultValues = {},
}) {
    const [value, setValue] = useState([])
    const [combinations, setCombinations] = useState([])

    const {
        reset,
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm({
        // resolver: yupResolver(schema),
    })

    console.log("value", combineAttributes(value))

    return (
        <div className="col-md-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="attributes text-left">
                        Variaciones de Producto
                    </label>
                    <Select
                        onChange={(e) => {
                            setValue(e)
                            setCombinations(combineAttributes(e))
                        }}
                        value={value}
                        options={options}
                        isMulti
                        getOptionValue={(option) => option.id}
                        getOptionLabel={(option) => option.name}
                        isOptionDisabled={() => value.length >= 2}
                    />
                </div>
                <Combinations
                    data={combinations}
                    register={register}
                    // defaultValues={defaultValues?.combinations}
                />
                {value.length > 0 && (
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
