import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import swal from "sweetalert"

import Gallery from "../../components/gallery"
import { create, getAll, destroy } from "../../services/crudServices"
import Media from "../../components/forms/media"
import { showMessage } from "../../utils/toast"
import render from "../../utils/render"

function View() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await getAll("medias")
                setData(response.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [refresh])

    const handleSubmit = async (data) => {
        const response = await create("medias", data)
        if (response) {
            showMessage(response)
            setRefresh(!refresh)
        } else {
            showMessage(response)
        }
    }

    const handleDelete = async (id) => {
        swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, ¡no podrás recuperar este archivo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const response = await destroy(`medias/${id}`)
                if (response) {
                    showMessage(response)
                    setRefresh(!refresh)
                }
            }
        })
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card" id="business-info-container">
                    <div className="card-header ui-sortable-handle">
                        <h3 className="card-title info"></h3>
                        <div className="card-tools"></div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <Media onSubmit={handleSubmit} />
                            </div>
                            <div className="col-md-8">
                                <div className="">
                                    <strong>Imagenes</strong>
                                    <div className="card p-3">
                                        <div className="row ">
                                            {isLoading ? (
                                                <div className="col-md-12 text-center">
                                                    <div className="spinner-border text-primary"></div>
                                                </div>
                                            ) : (
                                                <div className="media-image-container">
                                                    <Gallery
                                                        data={data}
                                                        handleDelete={
                                                            handleDelete
                                                        }
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

render(View)
export default View
