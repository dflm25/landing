import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const showMessage = (response) => {
    toast[response.status](response.message, {
        toastId: "success1",
    })
}
