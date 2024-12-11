import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    base_price: yup
        .number()
        .required("El precio es obligatorio")
        .positive("El precio debe ser positivo"),
    description: yup.string().required("La descripción es obligatoria"),
})


export default schema;