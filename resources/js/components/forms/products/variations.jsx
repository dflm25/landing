import React, { useState, useEffect } from 'react';

const Variations = ({ attributes, register }) => {
    const [combinations, setCombinations] = useState([]);
    console.log(combinations)

    useEffect(() => {
        if (attributes?.length > 0) {
            const generateCombinations = (attributes) => {
                const attributeValues = attributes.map(attribute => attribute.values);
                const combinations = [];
            
                const helper = (index, current) => {
                    if (index === attributeValues.length) {
                        combinations.push(current);
                        return;
                    }
                    attributeValues[index].forEach(value => {
                        helper(index + 1, [...current, value]);
                    });
                };
            
                helper(0, []);
                return combinations;
            };
            setCombinations(generateCombinations(attributes));
        }
    }, [attributes]);

    return (
        <div>
            {combinations.length > 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <p>Variaciones de Producto</p>
                        <table className='table table-striped'>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tbody>
                                    {combinations.map((combination, index) => (
                                        <tr>
                                            <td>
                                                <label>{combination.map(attr => attr?.value).join(' - ')}</label>
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
                </div>
            )}
        </div>
    );
};

export default Variations;
