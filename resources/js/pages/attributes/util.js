export { showMessage } from "../../utils/toast"

export const arrayToString = (array) => {
    const newArray = array.map((item) => {
        return item.value
    })

    return newArray
}
