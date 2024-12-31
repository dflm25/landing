export const encodeCombinations = (combinations) => {
    return JSON.stringify(combinations)
}

export const createFormData = (data) => {
    const formData = new FormData()
    for (const key in data) {
        if (key === "combinations") {
            formData.append(key, encodeCombinations(data[key]))
            continue
        } else if (key === "pictures" && data[key]) {
            if (Array.isArray(data[key])) {
                data[key]?.forEach((picture, index) => {
                    formData.append("pictures[]", picture.file)
                    formData.append("combination_id[]", picture.id)
                })
            }
            continue
        }

        formData.append(key, data[key])
    }
    return formData
}
