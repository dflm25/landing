import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    logo_url: yup.string().url("Logo URL must be a valid URL").nullable(),
});
  
export default schema