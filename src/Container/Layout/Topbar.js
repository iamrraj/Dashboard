import React, { Component } from "react";
import Logout from "../Logout";

import head from "../../img/head.png";
import Report from "./Report";
import Notification from "./Notification";

class Topbar extends Component {
  render() {
    return (
      <div>
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
              <li className="nav-item  active">
                <a
                  className="nav-link font-weight-bolder"
                  href="# "
                  style={{ color: "#212226" }}
                >
                  {" "}
                  UserName
                </a>
              </li>
              {/* For Notification */}
              <Notification />
              {/* End For Notificatioj */}
              <li className="nav-item  ">
                <a
                  className="nav-link a"
                  href="# "
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{ color: "#212226" }}
                >
                  {" "}
                  Report
                </a>
              </li>

              <Logout />
            </ul>
          </div>
        </nav>

        {/* <!-- Modal --> */}
        <Report />
      </div>
    );
  }
}

export default Topbar;

// render() {
//   const dictionary = [
//     { value: 'grapefruit', label: 'Grapefruit' },
//     { value: 'lime', label: 'Lime' },
//     { value: 'coconut', label: 'Coconut' },
//     { value: 'mango', label: 'Mango' }
//   ];

//   return (
//       <label>
//         <select
//           className="widefat"
//           value={this.state.value}
//           name={this.props.name}
//           onChange={this.handleChange}
//         >
//           {dictionary.map(
//             // Iterating over every entry of the dictionary and converting each
//             // one of them into an `option` JSX element
//             ({ value, label }) => <option key={value} value={value}>{label}</option>
//           )}
//         </select>
//       </label>
//   );
// }
