import Http from "../utils/http"
import config from "../config"

export const getAll = async (url, params = {}) => {
    return Http.get(url, params)
}

export const create = async (url, params) => {
    return Http.post(url, params)
}

export const update = async (url, params, id) => {
    return Http.post(`${config.BASE_URL}${url}/${id}?_method=PUT`, params, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export const getById = async (url, id) => {
    return Http.get(`${url}/${id}/edit`)
}

export const getByParam = async (url, params) => {
    const queryString = new URLSearchParams(params).toString()
    return Http.get((url = `${url}?${queryString}`))
}

export const destroy = async (url) => {
    return Http.delete(url)
}
