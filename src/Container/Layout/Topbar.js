import React, { Component } from "react";
import head from "../../img/head.png";
import { withRouter } from "react-router-dom";
import Notification from "./Notification";
import User from "../User";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      movies: [],
      info: [],
      logged_in: localStorage.getItem("Token") ? true : false
    };
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.clear();
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div className="roww">
        {/* <Repor loaddata={this.getData} /> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <a className="navbar-brand" href="/" style={{ color: "#212226" }}>
            <img src={head} alt="logo" style={{ height: "40px" }}></img> &nbsp;{" "}
            <span className="headdd">SOFT BIKE</span>
          </a>
          <button
            className="navbar-toggler"
            style={{ background: "#13B760" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav" style={{ marginRight: "70px" }}>
              {loggedIn && (
                <li className="nav-item  ">
                  <a
                    className="nav-link font-weight-bolder"
                    href="# "
                    style={{ color: "#212226" }}
                  >
                    <User />
                  </a>
                </li>
              )}
              {/* For Notification */}
              {loggedIn && <Notification />}
              {/* End For Notificatioj */}

              {loggedIn && (
                <li>
                  <a
                    className="nav-link a"
                    style={{ color: "#212226" }}
                    href=" #"
                    onClick={this.onLogout}
                  >
                    Wyloguj
                  </a>
                </li>
              )}
              {!loggedIn && (
                <li>
                  <a
                    className="nav-link a"
                    style={{ color: "#212226" }}
                    href="/"
                  >
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Topbar);
