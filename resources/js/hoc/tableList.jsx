import React, { useEffect, useState } from "react"
import { getAll } from "../services/crudServices"

const withView = (Component, url) => {
    return (props) => {
        const [refresh, setRefresh] = useState(false)
        const [isLoading, setIsLoading] = useState(false)
        const [data, setData] = useState({ data: [], total: 0 })
        const [paginate, setPaginate] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true)
                try {
                    const response = await getAll(url)
                    setData(response)
                } catch (error) {
                    console.error("Error fetching data:", error)
                } finally {
                    setIsLoading(false)
                }
            }

            fetchData()
        }, [refresh])

        return (
            <Component
                {...props}
                data={data}
                isLoading={isLoading}
                setRefresh={setRefresh}
                refresh={refresh}
            />
        )
    }
}

export default withView
