import React, { useState } from "react";
import axios from "axios";

const AddMobile = () => {
    const [formData, setFormData] = useState({
        mname: "",
        ram: "",
        storage: "",
        company: "",
        price: "",
        image: null,
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    // Validate form inputs
    const validate = () => {
        let errors = {};
        if (!formData.mname) errors.mname = "Mobile name is required";
        if (!formData.ram) errors.ram = "RAM is required";
        if (!formData.storage) errors.storage = "Storage is required";
        if (!formData.company) errors.company = "Company name is required";
        if (!formData.price) errors.price = "Price is required";
        if (!formData.image) errors.image = "Image is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const data = new FormData();
        data.append("mname", formData.mname);
        data.append("ram", formData.ram);
        data.append("storage", formData.storage);
        data.append("company", formData.company);
        data.append("price", formData.price);
        data.append("image", formData.image);

        axios
            .post("http://localhost:5000/admin/mobile", data)
            .then((res) => {
                setSuccessMessage("Mobile added successfully!");
                setFormData({
                    mname: "",
                    ram: "",
                    storage: "",
                    company: "",
                    price: "",
                    image: null,
                });
                setErrors({});
            })
            .catch((err) => {
                console.error("Error adding mobile:", err);
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-primary">Add New Mobile</h2>

            {successMessage && (
                <div className="alert alert-success text-center">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Mobile Name</label>
                    <input
                        type="text"
                        name="mname"
                        value={formData.mname}
                        onChange={handleChange}
                        className={`form-control ${errors.mname ? "is-invalid" : ""}`}
                        placeholder="Enter mobile name"
                    />
                    {errors.mname && <div className="invalid-feedback">{errors.mname}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">RAM</label>
                    <input
                        type="text"
                        name="ram"
                        value={formData.ram}
                        onChange={handleChange}
                        className={`form-control ${errors.ram ? "is-invalid" : ""}`}
                        placeholder="Enter RAM size (e.g., 8GB)"
                    />
                    {errors.ram && <div className="invalid-feedback">{errors.ram}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Storage</label>
                    <input
                        type="text"
                        name="storage"
                        value={formData.storage}
                        onChange={handleChange}
                        className={`form-control ${errors.storage ? "is-invalid" : ""}`}
                        placeholder="Enter Storage (e.g., 128GB)"
                    />
                    {errors.storage && <div className="invalid-feedback">{errors.storage}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`form-control ${errors.company ? "is-invalid" : ""}`}
                        placeholder="Enter company name"
                    />
                    {errors.company && <div className="invalid-feedback">{errors.company}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className={`form-control ${errors.price ? "is-invalid" : ""}`}
                        placeholder="Enter price in ₹"
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        className={`form-control ${errors.image ? "is-invalid" : ""}`}
                        accept="image/*"
                    />
                    {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success px-4 py-2 fw-bold">
                        Add Mobile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMobile;
