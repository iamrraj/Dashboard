import React, { Component } from "react";
import head from "../../img/head.png";

class Untopbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-white">
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li class="nav-item  active">
              <a class="nav-link text-dark" href="/">
                <i className="fas fa-sign-in-alt"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Untopbar;
