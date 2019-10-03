import React, { Component } from "react";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  // Get Data From Backend
  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:8000/api/1/deliveries/user1/`);
      const movies = await res.json();
      // console.log(report);
      this.setState({
        movies: movies.results
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
                  <div className="col-sm-7">
                    <div className="form-group">
                      From
                      <input
                        type="date"
                        name="from"
                        className="form-control datepicker"
                        style={{ width: "150px", color: "#13B760" }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-5">
                    <div className="form-group">
                      To
                      <input
                        type="date"
                        name="to"
                        className="form-control datepicker"
                        style={{ width: "150px", color: "#13B760" }}
                      />
                    </div>
                  </div>
                </div>

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active btn-outline-success"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      User
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link btn-outline-success"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Electric
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link btn-outline-success"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-contact"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Classic
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link btn-outline-success"
                      id="pills-walk-tab"
                      data-toggle="pill"
                      href="#pills-walk"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Walk
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <label>Select User</label>
                    <select
                      multiple
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="idd"
                    >
                      {this.state.movies.map(c => (
                        <option value={c.user}>{c.user1}</option>
                      ))}
                    </select>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <label>Select Electric Bike</label>
                    <select
                      multiple
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="idd"
                    >
                      <option>Electric</option>
                      <option>Electric</option>
                      <option>Electric</option>
                    </select>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <label>Select Classic Bike</label>
                    <select
                      multiple
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="idd"
                    >
                      <option>Classic</option>
                      <option>Classic</option>
                      <option>Classic</option>
                    </select>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-walk"
                    role="tabpanel"
                    aria-labelledby="pills-walk-tab"
                  >
                    <label>Select Walk</label>
                    <select
                      multiple
                      className="form-control btn-block"
                      id="exampleFormControlSelect2 btn-block"
                      style={{
                        width: "200px",
                        color: "rgba(19, 183, 96, 1.0)"
                      }}
                      name="idd"
                    >
                      <option>Walk</option>
                      <option>Walk</option>
                      <option>Walk</option>
                    </select>
                  </div>
                </div>

                <select
                  // multiple
                  className="form-control btn-block"
                  id="exampleFormControlSelect2 btn-block"
                  style={{
                    width: "200px",
                    color: "rgba(19, 183, 96, 1.0)"
                  }}
                  name="modee"
                >
                  <option value="">None</option>
                  <option value="foot">Foot</option>
                  <option value="bike">Classic Bike</option>
                  <option value="electric-bike">Electric Bike</option>
                </select>

                {/* <button
                  type="submit"
                  value="Get Data"
                  className="btn btn-login"
                  style={{ height: "40px", marginTop: "13px" }}
                >
                  Report
                </button> */}

                <center>
                  <a
                    href="/report"
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
                    GET REPORT
                  </a>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
