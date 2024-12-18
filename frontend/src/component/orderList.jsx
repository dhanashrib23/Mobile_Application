import React, { useEffect, useState } from "react";
import axios from "axios";


const OrdersList = () => {
    var userId = sessionStorage.getItem("userId");
    debugger;
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch orders data for the user
        axios
            .get(`http://localhost:5000/user/orders/${userId}`)
            .then((response) => {
                if (response.data.status === "success") {
                    setOrders(response.data.data);
                } else {
                    setError(response.data.message);
                }
            })
            .catch((err) => {
                console.error("Error fetching orders:", err);
                setError("Something went wrong while fetching orders!");
            });
    }, [userId]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Orders</h2>

            {error && (
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
            )}

            {orders.length > 0 ? (
                <table className="table table-bordered table-striped shadow">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Mobile Name</th>
                            <th>Company</th>
                            <th>RAM</th>
                            <th>Storage</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">
                                    <img
                                        src={`http://localhost:5000/images/${order.image}`}
                                        alt={order.mname}
                                        className="img-thumbnail"
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </td>
                                <td className="text-center">{order.mname}</td>
                                <td className="text-center">{order.company}</td>
                                <td className="text-center">{order.ram}</td>
                                <td className="text-center">{order.storage}</td>
                                <td className="text-center">₹{order.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && (
                    <div className="text-center">
                        <p className="fs-5 text-muted">No orders found.</p>
                    </div>
                )
            )}
        </div>
    );
};

export default OrdersList;
