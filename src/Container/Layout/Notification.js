import React, { Component } from "react";

export class Notification extends Component {
  render() {
    return (
      <li className="nav-item dropdown  ">
        <a
          className="nav-link dropdown-toggle a"
          href="# "
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "#212226" }}
        >
          Powiadomienia
          <span className="badge badge-danger">4</span>
        </a>
        <div className="dropdown-menu noti " aria-labelledby="navbarDropdown">
          <table className="table table-hover ">
            <h6 className="container font-weight-bolder">
              POWIADOMIENIA{" "}
              <span
                aria-hidden="true"
                className="pull-right"
                style={{
                  opacity: "0.5",
                  fontSize: "25px",
                  fontWeight: "normal"
                }}
              >
                &times;
              </span>
            </h6>

            <tbody>
              <tr>
                <td>
                  <a href="# " style={{ color: "#212226" }}>
                    Notificatio From The User on{" "}
                    <strong style={{ color: "rgba(19, 183, 96, 1.0" }}>
                      EB01
                    </strong>{" "}
                  </a>
                  <br></br>
                  <span style={{ fontSize: "13px", opacity: "0.6" }}>
                    2 hours Ago{" "}
                  </span>
                </td>
              </tr>

              <tr>
                <td>
                  <a href="# " style={{ color: "#212226" }}>
                    Notificatio From The User on{" "}
                    <strong style={{ color: "rgba(19, 183, 96, 1.0" }}>
                      EB02
                    </strong>{" "}
                  </a>
                  <br></br>
                  <span style={{ fontSize: "13px", opacity: "0.6" }}>
                    2 hours Ago{" "}
                  </span>
                </td>
              </tr>
            </tbody>
            <hr></hr>
            <center>
              <a
                href="/notification"
                className="head"
                style={{ fontSize: "14px" }}
              >
                {" "}
                Zobacz wszystkie
              </a>
            </center>
          </table>
        </div>
      </li>
    );
  }
}

export default Notification;
