import React, { Component } from "react";
import "./index";
export class Topbar1 extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");

  //   script.src = "'../../../public/index'";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark  "
        style={{ marginLeft: "-15px", marginBottom: "-7px" }}
      >
        <span className="btnn ">
          <a
            className="navbar-brand rrr btnn"
            href="/dashboard"
            style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "18px" }}
          >
            {" "}
            Pulpit główny
          </a>
        </span>
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
          <ul className="navbar-nav mr-auto" id="my_styles">
            <li className="nav-item btnn ">
              <a
                className="nav-link font-weight-bold ra "
                href="/walk"
                style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "20px" }}
              >
                {" "}
                Piesza dystrybucja
              </a>
            </li>
            <li className="nav-item btnn  ">
              <a
                className="nav-link font-weight-bold ll "
                href="/electricbike"
                style={{ color: "rgba(19, 183, 96, 1.0)" }}
              >
                {" "}
                Dystrybucja rowerem elektrycznym{" "}
              </a>
            </li>
            <li className="nav-item  btnn ">
              <a
                className="nav-link font-weight-bold ll  "
                href="/classicbike"
                style={{ color: "rgba(19, 183, 96, 1.0)" }}
              >
                {" "}
                Dystrybucja rowerem klasycznym
              </a>
            </li>
            <li className="nav-item btnn  ">
              <a
                className="nav-link font-weight-bold ra  "
                href="/user"
                style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "20px" }}
              >
                {" "}
                Użytkownicy
              </a>
            </li>
            <li className="nav-item  btnn ">
              <a
                className="nav-link font-weight-bold ra "
                href="/report"
                style={{ color: "rgba(19, 183, 96, 1.0)", marginTop: "20px" }}
              >
                {" "}
                Raport
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Topbar1;
