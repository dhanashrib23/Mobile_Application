import { useEffect, useState } from "react";
import axios from "axios";

function AdminHome() {
    const [users, setUsers] = useState([]);
    const [searchName, setSearchName] = useState("");

    const getAllUsers = () => {
        axios
            .get("http://localhost:5000/admin/users")
            .then((reply) => {
                setUsers(reply.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const onSearchBoxChanged = (name) => {
        setSearchName(name.target.value);
    };

    return (
        <div className="container my-5">
            {/* Search Box */}
            <div className="row mb-4 justify-content-center">
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-white">
                            <b>Search Name</b>
                            {" "}
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter user name"
                            value={searchName}
                            onChange={onSearchBoxChanged}
                        />
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="table-responsive">
                <table className="table table-striped table-hover shadow-sm rounded">
                    <thead className="table-dark text-uppercase text-center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                        {users.map((user) => {
                            if (user.uname.toLowerCase().includes(searchName.toLowerCase())) {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.uname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                    </tr>
                                );
                            } else {
                                return null;
                            }
                        })}
                        {users.filter((user) =>
                            user.uname.toLowerCase().includes(searchName.toLowerCase())
                        ).length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-muted">
                                        No users found matching your search.
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminHome;
