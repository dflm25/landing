import axios from "axios"
import config from "../config"
import { toast } from "react-toastify"

// Create an Axios instance
const request = axios.create({
    // timeout: 10000, // Set a timeout limit
    baseURL: config.BASE_URL,
    headers: {
        Accept: "application/json",
        // "Content-Type": "multipart/form-data",
        // "Content-Type": "multipart/form-data",
    },
})

// Request interceptor
request.interceptors.request.use(
    async (config) => {
        // const response = await AsyncStorageGetData("auth-storage")
        // const token = response?.state?.user?.token
        //     ? response.state.user.token
        //    : null
        // Modify request config if needed
        // For example, add an authorization token
        // if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error) => {
        // Handle request error
        return Promise.reject(error)
    }
)

// Response interceptor
request.interceptors.response.use(
    (response) => {
        // Handle successful response
        if (response.status === 200) {
            toast.success(response?.data?.message)
        }

        return response.data
    },
    (error) => {
        // Handle response error
        /* if (error.response) {
            // Server responded with a status other than 2xx
            console.error("Response error:", error.response.data)
        } else if (error.request) {
            // Request was made but no response received
            console.error("No response received:", error.message)
        } else {
            // Something else caused the error
            console.error("Error:", error.message)
        } */
        if (error.response.status === 422) {
            toast.warning(error.response?.data?.message)
        }
        return Promise.reject(error)
    }
)

export default request
