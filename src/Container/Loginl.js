import React, { Component } from "react";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import head from "../img/head.png";
import login from "../img/login.svg";

export class Loginl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      submitted: false,
      logged_in: localStorage.getItem("token") ? true : false
    };
    this.cookies = new Cookies();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    if (this.state.email && this.state.password) {
      this.fetchUserData();
    }
  }

  async fetchUserData() {
    Swal.fire({
      title: "Logging in Process",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const requestData = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: { "Content-Type": "application/json" }
    };

    const request = await fetch(
      "http://localhost:8000/core/current_user/",
      requestData
    );
    const response = await request;

    var error = true;

    if (response.success === undefined) {
      error = false;
    } else {
      error = true;
    }

    if (!error) {
      Swal.fire({
        title: "Loggedin",
        type: "success",
        showConfirmButton: false,
        timer: 1000
      }).then(login => {
        if (login.dismiss === Swal.DismissReason.timer) {
          // window.sessionStorage.setItem('isLoggedIn', true)
          window.location.href = "/";
        }
      });
    } else {
      Swal.fire({
        title: "Logging Error",
        type: "error",
        text: "Your entered Wrong Email or Password"
      });
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
                    name="email"
                    value={this.state.email}
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

export default Loginl;
