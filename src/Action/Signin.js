import React, { Component } from "react";
import PropTypes from "prop-types";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

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
              <form
                class="login-form"
                onSubmit={e => this.props.handle_login(e, this.state)}
              >
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
                    onChange={this.handle_change}
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
                    onChange={this.handle_change}
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
                  // onClick={this.handleSubmit}
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

export default Signin;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
