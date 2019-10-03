import React, { Component } from "react";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import head from "../img/head.png";
import login from "../img/login.svg";

export class Loginl extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    if (this.state.username && this.state.password) {
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
        username: this.state.username,
        password: this.state.password
      }),
      headers: { "Content-Type": "application/json" }
    };

    const request = await fetch(
      "http://localhost:8001/token-auth/",
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
      <form onSubmit={this.handleSubmit}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Loginl;
