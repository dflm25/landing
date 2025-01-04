import { toast } from "react-toastify"

export const showMessage = (response) => {
    toast[response.status](response.message, {
        toastId: "success1",
    })
}
