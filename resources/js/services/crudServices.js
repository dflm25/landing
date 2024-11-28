import Http from "../utils/http"

export const getAll = async (url, params = {}) => {
    return Http.get(url, params)
}

export const create = async (url, params) => {
    return Http.post(url, params)
}

export const getById = async (url, id) => {
    return Http.get(`${url}/${id}`)
}

export const getByParam = async (url, params) => {
    const queryString = new URLSearchParams(params).toString()
    return Http.get((url = `${url}?${queryString}`))
}
