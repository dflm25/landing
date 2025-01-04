import React, { useState, useEffect } from "react"

const Combinations = ({ data, register, control }) => {
    return (
        <div>
            {data.length > 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control text-right"
                                                placeholder="Cantidad"
                                                {...register(
                                                    `combinations[${index}].quantity`
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
