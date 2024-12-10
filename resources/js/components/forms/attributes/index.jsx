import React from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { TagsInput } from "react-tag-input-component"

import schema from "./formSchema"

const Form = ({
    onSubmit,
    defaultValues = {},
    actions: { handleToRemoveItem },
}) => {
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    })

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
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

                <div className="mb-3">
                    <label htmlFor="variations" className="form-label">
                        Variations
                    </label>
                    <Controller
                        control={control}
                        name="attribute_values"
                        render={({ field: { onChange, value } }) => (
                            <TagsInput
                                value={value}
                                onChange={onChange}
                                name="variations"
                                placeHolder="Ingresa las variaciones"
                                onRemoved={(removed) => {
                                    const filtered = value.filter(
                                        (item) => item !== removed
                                    )
                                    onChange(filtered)
                                }}
                            />
                        )}
                    />
                    {errors.variations && (
                        <p className="text-danger">
                            {errors.variations.message}
                        </p>
                    )}
                </div>
                <input
                    id="id"
                    className="form-control"
                    {...register("id")}
                    type="hidden"
                />
                <button type="submit" className="btn btn-primary">
                    Save Variations
                </button>
            </form>
        </div>
    )
}

export default Form
