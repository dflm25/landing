import axios from "axios"
import React, { useState } from "react"

const BusinessInfoForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/business-info", formData)
            alert("Business info created successfully.")
        } catch (error) {
            console.error(
                "There was an error creating the business info!",
                error
            )
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}

export default BusinessInfoForm
