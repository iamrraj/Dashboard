import React, { Component } from "react";

export class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Choose UserName",
      value: props.value
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  walk = () => {
    this.setState({
      text: "Choose UserName"
    });
  };

  electric = () => {
    this.setState({
      text: "Choose The Bike ID"
    });
  };

  classic = () => {
    this.setState({
      text: "Bike Id"
    });
  };

  user = () => {
    this.setState({
      text: "Choose UserName Of User"
    });
  };

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
              <form>
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

                <p>Choose the Distribution Type</p>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-success  active"
                    onClick={this.walk}
                    style={{ background: "rgba(19, 183, 96, 1.0)" }}
                  >
                    Walk
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success "
                    onClick={this.electric}
                  >
                    EB
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success "
                    onClick={this.classic}
                  >
                    CB
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success "
                    onClick={this.user}
                  >
                    User
                  </button>
                </div>

                <div className="form-group" style={{ marginTop: "20px" }}>
                  <label for="exampleFormControlSelect2">
                    {this.state.text}
                  </label>
                  {/* value={this.state.value} name={this.props.name} onChange={this.handleChange.bind(this)} */}
                  <select
                    multiple
                    className="form-control btn-block"
                    id="exampleFormControlSelect2 btn-block"
                    style={{ width: "200px", color: "rgba(19, 183, 96, 1.0)" }}
                  >
                    <option>Electric Bike</option>
                    <option>Classic Bike</option>
                    <option>Walk</option>
                    <option>User</option>
                    <option>User 1</option>
                  </select>
                </div>

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
            {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                           
                        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
