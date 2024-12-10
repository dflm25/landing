import Http from "../utils/http"

export const getAll = async (url, params = {}) => {
    return Http.get(url, params)
}

export const create = async (url, params) => {
    return Http.post(url, params)
}

export const update = async (url, params) => {
    return Http.put(`${url}/${params.id}`, params)
}

export const getById = async (url, id) => {
    return Http.get(`${url}/${id}/edit`)
}

export const getByParam = async (url, params) => {
    const queryString = new URLSearchParams(params).toString()
    return Http.get((url = `${url}?${queryString}`))
}
