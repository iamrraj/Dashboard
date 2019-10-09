import React, { Component } from "react";
// import Logout from "../Logout";
// import Logout1 from
// import Repor from "../../Views/Page/Repor";
// import Swal from "sweetalert2";
import head from "../../img/head.png";
import { withRouter } from "react-router-dom";
// import Report from "./Report";
import Notification from "./Notification";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      movies: null,
      logged_in: localStorage.getItem("Token") ? true : false
    };
    this.onLogout = this.onLogout.bind(this);
  }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch(`http://localhost:8001/api/1/me/`);
  //     const movies = await res.json();
  //     console.log(movies);
  //     this.setState({
  //       movies
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  onLogout() {
    localStorage.clear();
    this.props.history.push("/");
    window.location.reload();
  }

  getdata = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      const electric = e.target.elements.electric.value;
      const user = e.target.elements.user.value;
      e.preventDefault();
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/report/?too__lte=${to}&fromm__gte=${from}&electric_bike=${electric}&user=${user}`
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { loggedIn } = this.props;
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
              {loggedIn && (
                <li className="nav-item  active">
                  <a
                    className="nav-link font-weight-bolder"
                    href="# "
                    style={{ color: "#212226" }}
                  >
                    {/* {this.state.logged_in ? `${this.state.username}` : "User"} */}
                    User
                  </a>
                </li>
              )}
              {/* For Notification */}
              {loggedIn && <Notification />}
              {/* End For Notificatioj */}
              {loggedIn && (
                <li className="nav-item  ">
                  <a href="/report">.</a>
                </li>
              )}
              {loggedIn && (
                <li className="nav-item  ">
                  <a
                    className="nav-link a"
                    href="/report"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    style={{ color: "#212226" }}
                  >
                    {" "}
                    Report
                  </a>
                </li>
              )}

              {loggedIn && (
                <li>
                  <a
                    className="nav-link a"
                    style={{ color: "#212226" }}
                    href=" #"
                    onClick={this.onLogout}
                  >
                    Wyloguj
                  </a>
                </li>
              )}
              {!loggedIn && (
                <li>
                  <a
                    className="nav-link a"
                    style={{ color: "#212226" }}
                    href="/"
                  >
                    Login
                  </a>
                </li>
              )}

              {/* <Logout /> */}
            </ul>
          </div>
        </nav>

        {/* <!-- Modal --> */}
        {/* <Repor loaddata={this.getData} /> */}
      </div>
    );
  }
}

export default withRouter(Topbar);
