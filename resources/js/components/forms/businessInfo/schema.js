import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().required("Nombre es requerido"),
    subdomain: yup.string().required("Subdominio es requerido"),
    logo_url: yup.string().nullable(),
})

export default schema
