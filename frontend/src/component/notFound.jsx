import React from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
    return (
        <div className="container-fluid bg-light vh-100 p-0">
            <Navbar />
            <div className="d-flex align-items-center justify-content-center bg-light">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <p className="fs-3">
                        <span className="text-warning">Oops!</span> Page not found.
                    </p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist or was removed.
                    </p>
                    <a href="/" className="btn btn-primary">
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
