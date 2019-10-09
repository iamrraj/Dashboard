import React, { Component } from "react";
// import { Provider } from "unstated";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./Container/Layout/Topbar";
import Untopbar from "./Container/Layout/Untopbar";
// import Footer from './Container/Layout/Footer'
import Dashboard from "./Views/Dashboard";
import ElectricBike from "./Views/Electric/ElectricBike";
import ClassicBike from "./Views/Classic/ClassicBike";
import Walk from "./Views/Walk/Walk";
import Edetails from "./Views/Electric/Edetails";
import Cdetails from "./Views/Classic/Cdetails";
import Details from "./Views/Walk/Details";
import user from "./Views/User/user";
import Udetails from "./Views/User/Udetails";
import Login from "./Container/Login";
import RegisterPage from "./Container/Register";
import Notification from "./Views/Page/Notification";
import ReportPage from "./Views/Page/Report";
import Cookies from "universal-cookie";
import ls from "local-storage";

import Signin from "./Component/Signin";
// import CustomMap from "./Component/CustomMap";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      isLoggedIn: true
    };
    this.cookies = new Cookies();
  }

  isLoggedIn() {
    if (this.cookies.get("Access-Token")) {
      return false;
    } else {
      return true;
    }
  }

  getProperRoot() {
    if (!this.isLoggedIn()) {
      return Dashboard;
    } else {
      return Login;
    }
  }

  getProperHeader() {
    if (this.isLoggedIn()) {
      return (
        <Untopbar
          className="sticky"
          refresh={() => {
            this.setState({ refresh: !this.state.refresh });
          }}
        />
      );
    }
    return (
      <Topbar
        className="sticky"
        refresh={() => {
          this.setState({ refresh: !this.state.refresh });
        }}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        {this.getProperHeader()}
        <Switch>
          <Route exact path="/" component={this.getProperRoot()} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/electricbike" component={ElectricBike} />
          <Route path="/classicbike" component={ClassicBike} />
          <Route path="/walk" component={Walk} />
          <Route path="/eoverview/:pk" component={Edetails} />
          <Route path="/coverview/:pk" component={Cdetails} />
          <Route path="/woverview/:pk" component={Details} />
          <Route path="/user" component={user} />
          <Route path="/uoverview/:pk" component={Udetails} />
          <Route path="/notification" component={Notification} />
          <Route path="/report" component={ReportPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={Signin} />
          {/* <Route path="/map" component={CustomMap} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
