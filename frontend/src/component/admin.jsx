import AdminNavbar from "./adminNavbar";
import { Route } from 'react-router-dom';

function Admin(props) {
    return (<div>
        <AdminNavbar></AdminNavbar>
        <Route exact path={props.path} component={props.component}></Route>;
    </div>);
}

export default Admin;
