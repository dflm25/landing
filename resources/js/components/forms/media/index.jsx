import React, { useState } from "react"
import { useForm } from "react-hook-form"

export default function Media({ onSubmit }) {
    const { register, handleSubmit } = useForm()
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const formSubmit = (data) => {
        const formData = new FormData()
        formData.append("image", image)
        formData.append("alt", data.alt)

        onSubmit(formData)
        setImagePreview(null)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
            setImage(file)
        }
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="">descripcion de la image</label>
                        <input
                            type="text"
                            id=""
                            className="form-control"
                            {...register("alt")}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="img-fluid"
                        />
                    )}
                </div>
            </div>

            <button type="submit" className="btn btn-info mt-3">
                Submit
            </button>
        </form>
    )
}
