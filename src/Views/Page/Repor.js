import React, { Component } from "react";
import config from "../config";
import Electric from "./Electric";

export class Repor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: ["iamrraj"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.option});
    this.setState({
      value: Array.from(event.target.selectedOptions, item => item.value)
    });
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  // Get Data From Backend
  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.reportModel);
      const movies = await res.json();
      // console.log(report);
      this.setState({
        movies
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ marginTop: "15px" }}>
              <h6 className="modal-title" id="rep">
                Raport
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  id="cut"
                  style={{
                    opacity: "0.7",
                    fontSize: "30px",
                    fontWeight: "normal"
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body ">
              <form onSubmit={this.props.loaddata}>
                <div className="row">
                  <div className="col-sm-6">
                    <div class="form-group">
                      <span style={{ opacity: "0.6", fontSize: "13px" }}>
                        OD
                      </span>
                      <input
                        type="date"
                        name="from"
                        class="form-control datepicker"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div class="form-group">
                      <span style={{ opacity: "0.6", fontSize: "13px" }}>
                        DO
                      </span>
                      <input
                        type="date"
                        name="to"
                        class="form-control datepicker"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>
                </div>

                <ul class="nav nav-pills">
                  <li class="active">
                    <a
                      data-toggle="pill"
                      href="#home"
                      className="nav-link btn-outline-success"
                    >
                      Uzytkownik
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="pill"
                      href="#menu1"
                      className=" nav-link btn-outline-success"
                    >
                      Elektryczny
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="pill"
                      href="#menu2"
                      className=" nav-link btn-outline-success"
                    >
                      Klasyczny
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="pill"
                      href="#menu3"
                      className="nav-link btn-outline-success"
                    >
                      Pieszo
                    </a>
                  </li>
                </ul>

                <br></br>

                <div class="tab-content">
                  <div id="home" class="tab-pane fade in active">
                    <label>Select User</label>
                    <select
                      multiple={true}
                      // value={this.state.value}
                      // onChange={this.handleChange}
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="idd"
                    >
                      {this.state.movies.map(c => (
                        <option value={c.pk}>{c.user1}</option>
                      ))}
                    </select>
                    <br></br>
                    <label>Select Mode</label>
                    <select
                      multiple
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="modee"
                    >
                      <option value="">None</option>
                      <option value="foot">Pieszo</option>
                      <option value="bike">Rower Klasyczny</option>
                      <option value="electric-bike">Rower Elektryczny</option>
                    </select>
                  </div>
                  <div id="menu1" class="tab-pane fade">
                    <label>Select Elektryczny </label>
                    <Electric />
                  </div>
                  <div id="menu2" class="tab-pane fade">
                    <label>Select Rower Klasyczny User</label>
                    <select
                      multiple={true}
                      // value={this.state.value}
                      // onChange={this.handleChange}
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      // name="idd"
                    >
                      {this.state.movies.map(c => (
                        <option value={c.pk}>CB-{c.user1}</option>
                      ))}
                    </select>
                  </div>
                  <div id="menu3" class="tab-pane fade">
                    <label>Select Pieszo User</label>
                    <select
                      multiple={true}
                      // value={this.state.value}
                      // onChange={this.handleChange}
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      // name="idd"
                    >
                      {this.state.movies.map(c => (
                        <option value={c.pk}>{c.user1}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <br></br>
                {/*  */}
                <center>
                  <button
                    type="submit"
                    value="Get Data"
                    className="btn btn-success active"
                    style={{
                      width: "200px",
                      background: "rgba(19, 183, 96, 1.0)",
                      padding: "7px",
                      marginTop: "15px",
                      marginBottom: "15px",
                      fontWeight: "500"
                    }}
                  >
                    Raport
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Repor;
