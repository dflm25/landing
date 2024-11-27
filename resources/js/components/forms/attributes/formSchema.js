import * as yup from "yup"

// Definir el esquema de validación con Yup
const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    attribute_values: yup
        .array()
        .of(yup.string().required("Variation is required"))
        .required("At least one variation is required"),
})

export default schema
