import React, { Component } from "react";
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./Container/Layout/Topbar";

import Dashboard from "./Views/Dashboard";
import ElectricBike from "./Views/Electric/ElectricBike";
import ClassicBike from "./Views/Classic/ClassicBike";
import Walk from "./Views/Walk/Walk";
import Edetails from "./Views/Electric/Edetails";
import Cdetails from "./Views/Classic/Cdetails";
import Details from "./Views/Walk/Details";
import user from "./Views/User/user";
import Udetails from "./Views/User/Udetails";
import Notification from "./Views/Page/Notification";
import ReportPage from "./Views/Page/Report";
import Auth from "./Container/Auth";
// import Signin from "./Container/Signin";

import "./App.css";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      username: "",
      logged_in: true,
      isLoggedIn: true
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Topbar loggedIn={localStorage.getItem("Token") != null} />
        <Switch>
          <Route exact path="/" component={Auth} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/electricbike" component={ElectricBike} />
          <PrivateRoute path="/classicbike" component={ClassicBike} />
          <PrivateRoute path="/walk" component={Walk} />
          <PrivateRoute path="/eoverview/:pk" component={Edetails} />
          <PrivateRoute path="/coverview/:pk" component={Cdetails} />
          <PrivateRoute path="/woverview/:pk" component={Details} />
          <PrivateRoute path="/user" component={user} />
          <PrivateRoute path="/uoverview/:pk" component={Udetails} />
          <PrivateRoute path="/notification" component={Notification} />
          <PrivateRoute path="/report" component={ReportPage} />

          {/* <Route path="/login" component={Signin} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
