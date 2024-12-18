import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayMobiles = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/user/mobiles")
            .then((response) => {
                setMobiles(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the mobile data!", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:5000/admin/mobiles")
            .then((response) => {
                setMobiles(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the mobile data!", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {mobiles.map((mobile) => (
                    <div
                        key={mobile.id}
                        className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch"
                    >
                        <div className="card shadow-sm border-0 w-100 rounded-3 overflow-hidden">
                            {/* Image Section */}
                            <div className="text-center bg-light p-3">
                                <img
                                    src={`http://localhost:5000/images/${mobile.image}`}
                                    alt={mobile.mname}
                                    className="card-img-top"
                                    style={{
                                        objectFit: "contain",
                                        height: "180px",
                                        width: "100%",
                                    }}
                                />
                            </div>

                            {/* Mobile Details Section */}
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title text-primary fw-bold text-center mb-3">
                                        {mobile.mname}
                                    </h5>
                                    <p className="card-text text-center text-muted mb-2">
                                        <b>Company:</b> {mobile.Company}
                                    </p>
                                </div>

                                {/* Button */}
                                <div className="text-center mt-3">
                                    <Link
                                        to={`/admin/mobile/${mobile.id}`}
                                        className="btn btn-outline-primary btn-sm px-4 py-2 fw-bold rounded-pill"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayMobiles;
