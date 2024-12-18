import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const MobileDetailUser = () => {
    const { id } = useParams();
    const [mobile, setMobile] = useState(null);
    const history = useHistory();
    const uid = sessionStorage.getItem("userId");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/user/mobile/${id}`)
            .then((response) => {
                setMobile(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the mobile details!", error);
            });
    }, [id]);

    // Add to Cart Functionality
    const addToCart = async () => {
        try {
            const response = await axios.post("http://localhost:5000/user/place-order", {
                userId: uid,
                mobileId: id,
            });

            if (response.data.status === "success") {
                alert("Mobile added to cart successfully!");
                history.push("/user");
            } else {
                alert("Failed to add mobile to cart. Please try again.");
            }
        } catch (error) {
            console.error("Error adding to cart:", error.message);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            {mobile ? (
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg border-0 rounded-3">
                            <div className="text-center bg-light p-3">
                                <img
                                    src={`http://localhost:5000/images/${mobile.image}`}
                                    alt={mobile.mname}
                                    className="img-fluid"
                                    style={{
                                        maxHeight: "300px",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            {/* Details Section */}
                            <div className="card-body">
                                <h3 className="card-title text-center text-primary fw-bold mb-3">
                                    {mobile.mname}
                                </h3>
                                <ul className="list-unstyled text-muted mb-4">
                                    <li>
                                        <b>Company:</b> {mobile.Company}
                                    </li>
                                    <li>
                                        <b>RAM:</b> {mobile.ram}
                                    </li>
                                    <li>
                                        <b>Storage:</b> {mobile.storage}
                                    </li>
                                    <li>
                                        <b>Price:</b> ₹{mobile.price}
                                    </li>
                                </ul>

                                {/* Button Section */}
                                <div className="text-center">
                                    <button
                                        onClick={addToCart}
                                        className="btn btn-success px-5 py-2 fw-bold rounded-pill"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-5">
                    <p className="text-muted fs-4">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default MobileDetailUser;
