export const arrayToString = (array) => {
    const newArray = array.map((item) => {
        return item.value
    })

    return newArray
}
