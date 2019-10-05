import React, { Component } from "react";
// import Swal from "sweetalert2";
// import Cookies from "universal-cookie";
import head from "../img/head.png";
import login from "../img/login.svg";
import axios from "axios";
import ls from "local-storage";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.redirect = this.redirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handValidation = this.handValidation.bind(this);
  }

  componentDidMount() {
    this.redirect();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",

      url: "http://localhost:8001/token-auth/",
      data: { username: this.state.username, password: this.state.password }
    })
      .then(response => {
        var ls = require("local-storage");
        ls.set("Token", response.data["token"]);
        this.redirect();
      })
      .catch(response => {
        //handle error
        console.log(response);
      });
  }
  redirect() {
    if (ls.get("Token")) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <section class="login-block ">
        <div class="containe container">
          <div class="row">
            <div class="col-md-5 id login-sec ">
              <img src={head} alt="logo" style={{ height: "60px" }}></img>{" "}
              <br></br>
              <span className="headd" style={{ fontSize: "13px" }}>
                SOFT BIKE
              </span>
              <h5 className=" text-dark text-left log">LOG IN</h5>
              <form class="login-form">
                <div class="form-group">
                  <label
                    for="exampleInputEmail1"
                    class=""
                    style={{
                      color: "rgba(19, 183, 96, 1.0)",
                      fontSize: "13px",
                      opacity: "0.7"
                    }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleInputPassword1"
                    class=""
                    style={{
                      color: "rgba(19, 183, 96, 1.0)",
                      fontSize: "13px",
                      opacity: "0.7"
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder=""
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    opacity: "0.6",
                    fontWeight: "400",
                    fontFamily: "'Roboto', Helvetica, Arial, serif"
                  }}
                >
                  Forget Password ?
                </p>
                <br></br>
                <button
                  type="submit"
                  value="Login"
                  onClick={this.handleSubmit}
                  class="btn btn-login btn-block text-white font-weight-bolder box "
                  style={{
                    background: "rgba(19, 183, 96, 1.0)",
                    padding: "10px",
                    boxShadow: "0px 8px 25px -7px #c0c0c0",
                    borderRadius: "4px"
                  }}
                >
                  START
                </button>
              </form>
            </div>
            <div class="col-md-7 banner-sec">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src={login}
                      alt="First slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <div class="banner-text">
                        <h2>SOFT BIKE</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
