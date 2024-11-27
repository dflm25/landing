import Http from "../utils/http"

export const getAll = async (url, params = {}) => {
    return Http.get(url, params)
}

export const create = async (url, params) => {
    return Http.post(url, params)
}
