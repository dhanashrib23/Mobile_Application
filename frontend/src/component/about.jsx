import React from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
    return (
        <div className="container-fluid bg-light vh-100 p-0">
            <Navbar />
            <div className="container text-center py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <h1 className="fw-bold mb-4 text-primary">About Us</h1>
                        <p className="lead text-muted px-3">
                            Welcome to our mobile application! We aim to provide a seamless experience for managing tasks and improving productivity.
                        </p>
                        <div className="my-4">
                            <img
                                src="http://localhost:3000/application.png"
                                alt="About us"
                                className="img-fluid.max-width:10% rounded-circle shadow"
                                style={{ "width": "150px", "height": "150px" }}
                            />
                        </div>
                        <p className="text-secondary px-4">
                            Our app is designed with simplicity and speed in mind, ensuring users have a smooth experience every time.
                        </p>
                        <a href="/" className="btn btn-primary mt-3">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
