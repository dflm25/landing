import React, { useState, useEffect } from "react"
import { useFieldArray } from "react-hook-form"

const Variations = ({ attributes, register, control }) => {
    const [combinations, setCombinations] = useState([])
    // const [files, setFiles] = useState({})

    const { fields, append, remove } = useFieldArray({
        control,
        name: "variations",
    })

    useEffect(() => {
        if (attributes?.length > 0) {
            const generateCombinations = (attributes) => {
                const attributeValues = attributes.map(
                    (attribute) => attribute.values
                )
                const combinations = []
                const helper = (index, current) => {
                    if (index === attributeValues.length) {
                        combinations.push(current)
                        return
                    }
                    attributeValues[index].forEach((value) => {
                        helper(index + 1, [...current, value])
                    })
                }

                helper(0, [])
                return combinations
            }
            setCombinations(generateCombinations(attributes))
        }
    }, [attributes])
    // console.log("fields", fields)
    // console.log("combinations", combinations)
    return (
        <div>
            {combinations.length > 0 && (
                <div className="row">
                    <div className="col-md-6">
                        <p>Variaciones de Producto</p>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {combinations.map((combination, index) => (
                                    <tr key={`variation-${index}`}>
                                        <td>
                                            <label>
                                                {combination
                                                    .map((attr) => attr?.value)
                                                    .join(" - ")}
                                            </label>
                                            <input
                                                type="hidden"
                                                className="form-control text-right"
                                                name={`combinations[${index}].id`}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control text-right"
                                                placeholder="Cantidad"
                                                name={`combinations[${index}].quantity`}
                                                {...register("description")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control text-right"
                                                placeholder="Precio"
                                                name={`combinations[${index}].price`}
                                                {...register("description")}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            )}
        </div>
    )
}

export default Variations
