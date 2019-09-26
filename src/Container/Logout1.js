import React, { Component } from "react";

class Logout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: ""
    };
  }

  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
  };
  render() {
    return (
      <li>
        <a
          class="nav-link a"
          href="# "
          data-toggle="modal"
          onClick={this.handle_logout}
          style={{ color: "#212226" }}
        >
          {" "}
          Logout{" "}
        </a>
      </li>
    );
  }
}

export default Logout1;
