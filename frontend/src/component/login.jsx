import { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const redirect = useHistory();

    const OnTextChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const userLogin = () => {
        axios.post("http://localhost:5000/user/login", credentials).then((reply) => {
            if (reply.data.data != null || reply.data.data != undefined) {
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("userId", reply.data.data.id);
                sessionStorage.setItem("role", reply.data.data.role);
                if (reply.data.data.role == "user") {
                    redirect.push("/user");
                }
                else if (reply.data.data.role == "admin") {
                    redirect.push("/admin");
                }
            } else {
                alert("Invalid Credentials. Please try again.");
            }
        });
    };

    return (

        <div className="container-fluid bg-light vh-100 p-0">
            <Navbar />
            <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">
                <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-primary">Login</h2>
                        <p className="text-muted">Please sign in to continue</p>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={OnTextChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={OnTextChange}
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="d-grid">
                            <button
                                type="button"
                                onClick={userLogin}
                                className="btn btn-primary fw-bold"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-muted small">
                            Don't have an account? <a href="/register" className="text-decoration-none">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
