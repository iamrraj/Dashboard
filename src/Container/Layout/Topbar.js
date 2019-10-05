import React, { Component } from "react";
import Logout from "../Logout";
// import Logout1 from
// import Repor from "../../Views/Page/Repor";
import head from "../../img/head.png";
// import Report from "./Report";
import Notification from "./Notification";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      username: "",
      logged_in: true
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:8001/core/current_user/`);
      const username = await res.json();
      console.log(username);
      this.setState({
        username
      });
    } catch (e) {
      console.log(e);
    }
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
                  {/* {this.state.logged_in
                    ? `Hello, ${this.state.username}`
                    : "Please Log In"} */}
                  User
                </a>
              </li>
              {/* For Notification */}
              <Notification />
              {/* End For Notificatioj */}
              <li className="nav-item  ">
                <a href="/report">.</a>
              </li>
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

              <Logout />
            </ul>
          </div>
        </nav>

        {/* <!-- Modal --> */}
        {/* <Repor loaddata={this.getData} /> */}
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
