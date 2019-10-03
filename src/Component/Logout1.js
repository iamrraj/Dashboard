import React, { Component } from "react";
import Swal from "sweetalert2";

import Cookies from "universal-cookie";

class Logout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: ""
    };
    this.handle_logout = this.Logout.bind(this);
    this.cookies = new Cookies();
  }

  handle_logout () => {
    // localStorage.removeItem("token");
    // this.setState({ logged_in: false, username: "" });
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
