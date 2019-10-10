import React, { Component } from "react";
import config from "../../Views/config";

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

                <div className="form-group">
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
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Classic
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
                        Walk
                      </a>
                    </li>
                    {/* <li class="nav-item">
              <a
                class="nav-link btn-outline-success"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li> */}
                  </ul>
                </div>
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
                        <option value={c.pk}>{c.user1}</option>
                      ))}
                    </select>
                  </div>

                  <div
                    class="tab-pane fade "
                    id="pills-profile "
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <label>Select Electric Bike</label>
                  </div>
                  {/* <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
             <label>Select User</label>
            <select
              // multiple
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
          </div> */}
                </div>
                <br></br>
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

export default Report;
