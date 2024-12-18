import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../public/application.png'

function Navbar() {
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
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;