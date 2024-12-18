import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./home";
import Login from "./login";
import About from "./about";
import Register from "./register";
import NotFound from "./notFound";
import Admin from "./admin";
import User from "./user";
import AdminHome from "./adminHome";
import UserHome from "./userHome";
import MobileDetailUser from "./mobileDetailUser"
import MobileDetailAdmin from "./mobileDetailAdmin";
import AddMobile from "./addMobile";
import DisplayMobiles from "./displayMobiles";
import OrdersList from "./orderList";

function App() {
  return (<>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>

      <Admin exact path="/admin" component={AdminHome}></Admin>
      <Admin exact path="/admin/adminHome" component={AdminHome}></Admin>
      <Admin exact path="/admin/mobiles" component={DisplayMobiles}></Admin>
      <Admin exact path="/admin/mobile" component={AddMobile}></Admin>
      <Admin exact path="/admin/mobile/:id" component={MobileDetailAdmin}></Admin>

      <User exact path="/user" component={UserHome}></User>
      <User exact path="/user/userHome" component={UserHome}></User>
      <User exact path="/user/mobile/:id" component={MobileDetailUser}></User>
      <User exact path="/user/orders/:id" component={OrdersList}></User>

      <Route exact path="*" component={NotFound}></Route>
    </Switch>
  </>)
}

export default App;
