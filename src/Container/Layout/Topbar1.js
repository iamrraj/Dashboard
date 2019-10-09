import React, { Component } from "react";

export class Topbar1 extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark  "
        style={{ marginLeft: "-15px", marginBottom: "-7px" }}
      >
        <a
          className="navbar-brand rrr"
          href="/dashboard"
          style={{ color: "rgba(19, 183, 96, 1.0)" }}
        >
          {" "}
          Pulpit główny
        </a>
        <button
          className="navbar-toggler"
          style={{ background: "#13B760" }}
          type="button"
          data-toggle="collapse"
          data-target="#nnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nnavbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item  l">
              <a
                className="nav-link font-weight-bold"
                href="/walk"
                style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "9px" }}
              >
                {" "}
                Piesza dystrybucja
              </a>
            </li>
            <li className="nav-item   l">
              <a
                className="nav-link font-weight-bold ll"
                href="/electricbike"
                style={{ color: "rgba(19, 183, 96, 1.0)" }}
              >
                {" "}
                Dystrybucja rowerem elektrycznym{" "}
              </a>
            </li>
            <li className="nav-item   l">
              <a
                className="nav-link font-weight-bold ll "
                href="/classicbike"
                style={{ color: "rgba(19, 183, 96, 1.0)" }}
              >
                {" "}
                Dystrybucja rowerem klasycznym
              </a>
            </li>
            <li className="nav-item   l">
              <a
                className="nav-link font-weight-bold ll"
                href="/user"
                style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "9px" }}
              >
                {" "}
                Uźytkownicy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Topbar1;
