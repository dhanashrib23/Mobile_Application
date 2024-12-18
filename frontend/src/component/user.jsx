import UserNavbar from "./userNavbar";
import { Route } from 'react-router-dom';

function User(props) {
    return (<div>
        <UserNavbar></UserNavbar>
        <Route exact path={props.path} component={props.component}></Route>;
    </div>);
}

export default User;