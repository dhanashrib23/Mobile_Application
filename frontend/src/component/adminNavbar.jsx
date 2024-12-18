import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function AdminNavbar() {
    const history = useHistory();
    const logout = () => {
        sessionStorage.clear();
        history.push("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-light bg-white rounded">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="http://localhost:3000/application.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    &nbsp;MobiShop
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/adminHome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/mobile">Add Mobile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/mobiles">Display Mobiles</a>
                        </li>
                        <li className="nav-item d-flex align-items-center ms-3">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;