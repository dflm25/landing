import React, { useState, useEffect } from "react"

const Combinations = ({ data, register }) => {
    useEffect(() => {}, [data])

    // console.log("combinations component", data)

    return (
        <div>
            {data?.length > 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>Nombre</td>
                                    <td className="text-right">Cantidad</td>
                                    <td className="text-right">Precio</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((combination, index) => (
                                    <tr key={`combinations-${index}`}>
                                        <td>
                                            <label>{combination.name}</label>
                                            <input
                                                type="hidden"
                                                {...register(
                                                    `combinations[${index}].name`,
                                                    { value: combination.name }
                                                )}
                                            />
                                            <input
                                                type="hidden"
                                                {...register(
                                                    `combinations[${index}].attribute_value_first`,
                                                    {
                                                        value: combination.attribute_value_first,
                                                    }
                                                )}
                                            />
                                            <input
                                                type="hidden"
                                                {...register(
                                                    `combinations[${index}].attribute_value_second`,
                                                    {
                                                        value: combination.attribute_value_second,
                                                    }
                                                )}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control text-right"
                                                placeholder="Cantidad"
                                                {...register(
                                                    `combinations[${index}].stock`
                                                )}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control text-right"
                                                placeholder="Precio"
                                                {...register(
                                                    `combinations[${index}].price`
                                                )}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Combinations
