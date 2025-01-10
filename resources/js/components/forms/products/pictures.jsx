import React, { useState, useEffect } from "react"
import { useFieldArray } from "react-hook-form"
import config from "../../../config"

const Pictures = ({ attributes, control, defaultValues }) => {
    const [file, setFile] = useState({})

    const { fields, append, remove } = useFieldArray({
        control,
        name: "pictures",
    })

    useEffect(() => {}, [attributes])

    const handleFileChange = (e, id) => {
        if (e.target.files) {
            setFile({ ...file, [id]: e.target.files[0] })
            append({ id, file: e.target.files[0] })
        }
    }

    const renderImage = (defaultValues, id) => {
        if (defaultValues) {
            const picture = defaultValues.find(
                (item) => item.attribute_value_id === id
            )
            if (picture) {
                return (
                    <img
                        src={`${config.BASE_URL}storage/${picture.image}`}
                        alt="imagen"
                        style={{ width: "50px" }}
                    />
                )
            }
        }
    }
    // console.log("attributes", attributes)
    console.log("defaultValues", defaultValues)

    return (
        <div>
            {attributes?.values?.length > 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {attributes.values.map((combination, index) => (
                                    <tr key={`variation-${index}`}>
                                        <td>
                                            <label>{combination?.value}</label>
                                            <input
                                                type="hidden"
                                                className="form-control text-right"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="file"
                                                className="form-control text-right"
                                                placeholder="Cantidad"
                                                onChange={(e) =>
                                                    handleFileChange(
                                                        e,
                                                        combination.id
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            {renderImage(
                                                defaultValues,
                                                combination?.id
                                            )}
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

export default Pictures
