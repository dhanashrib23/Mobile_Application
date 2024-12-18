import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
    const [user, setUser] = useState({
        uname: "",
        email: "",
        password: "",
        mobile: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleRegister = () => {
        axios
            .post("http://localhost:5000/user/register", user)
            .then((response) => {
                debugger;
                console.log(response.data);
                alert("Registration Successful!");
                history.push("/login");
            })
            .catch((error) => {
                console.error("There was an error registering the user!", error);
                alert("Error: " + error.message);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-4 text-primary">User Registration</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Username</label>
                                <input
                                    type="text"
                                    name="uname"
                                    className="form-control"
                                    placeholder="Enter Username"
                                    value={user.uname}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                    value={user.mobile}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-success me-2 px-4"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Register;
