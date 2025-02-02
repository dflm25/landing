import { transformProps } from "@measured/puck"

export const tranformProductData = (data) => {
    data = {
        ...data,
        attributes: data.attributes.map((attribute, index) => ({
            id: attribute.attribute.id,
            name: attribute.attribute.name,
        })),
        combinations: data.combinations.map((combination, index) => [
            { ...combination },
        ]),
    }

    return data
}

export const transformAttributesAndCombinations = (data) => {
    return {
        attributes: data.attributes.map((attribute, index) => {
            return {
                id: attribute.attribute.id,
                name: attribute.attribute.name,
                values: attribute.values.map((value) => ({
                    id: value.id,
                    value: value.value,
                    attribute_id: value.attribute_id,
                })),
            }
        }),
        combinations: data.combinations.map((combination, index) => ({
            ...combination,
        })),
    }
}

export const deleteDuplicate = (data) => {
    return data.filter(
        (value, index, self) =>
            index ===
            self.findIndex(
                (t) => t.attribute_value_first === value.attribute_value_first
            )
    )
}

export const combineAttributes = (data) => {
    let result = []

    data.forEach((attributeGroup) => {
        // Obtener los valores del grupo actual
        const values = attributeGroup?.values?.map((value) => {
            return {
                id: value.id,
                name: value.value,
                attribute: value.attribute_id,
            }
        })

        // Si hay más de un grupo, hacer combinaciones cruzadas
        if (result?.length > 0) {
            let newCombinations = []
            result?.forEach((existingCombination) => {
                values?.forEach((newValue) => {
                    newCombinations.push({
                        name: `${existingCombination?.name} - ${newValue?.name}`,
                        attribute_value_first:
                            existingCombination?.attribute_value_first,
                        attribute_value_second: newValue?.id,
                        amount: 0,
                        cost: 0,
                    })
                })
            })
            result = newCombinations
        } else {
            // Si es el primer grupo, simplemente agregar los valores
            result = values?.map((value) => ({
                name: value.name,
                attribute_value_first: value?.id,
                attribute_value_second: null,
                amount: 0,
                cost: 0,
            }))
        }
    })

    return result
}
