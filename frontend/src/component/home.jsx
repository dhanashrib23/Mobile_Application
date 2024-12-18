import React from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="container-fluid bg-light vh-100 p-0">
            <Navbar />
            <div className="d-flex align-items-center justify-content-center" style={{ height: "calc(100vh - 56px)" }}>
                <div className="text-center">
                    <h1 className="display-4 fw-bold text-primary mb-3">
                        Welcome to MobiShop
                    </h1>
                    <p className="lead text-muted px-3" style={{ textAlign: "justify" }}>
                        MobiShop is a leading global online marketplace where customers can purchase a vast array of products, from electronics and clothing to groceries and home goods, all delivered directly to their doorstep. With a user-friendly platform, MobiShop allows sellers from around the world to list their items, providing consumers with a wide selection at competitive prices. Beyond retail, MobiShop also offers extensive cloud computing services through MobiShop Web Services (AWS), digital streaming subscriptions like Prime Video, and a subscription service called MobiShop Prime which provides fast shipping benefits and exclusive content access. Its commitment to customer convenience and rapid innovation has made MobiShop a dominant force in the e-commerce industry.
                    </p>
                    <div className="my-4">
                        <img
                            src="http://localhost:3000/home.jpg"
                            style={{ width: "350px", height: "350px" }}
                            alt="Hero"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
