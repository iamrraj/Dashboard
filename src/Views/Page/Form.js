import React, { Component } from "react";

export class Form extends Component {
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
      <form onSubmit={this.props.loaddata}>
        <div className="row">
          <div className="col-sm-4">
            <div class="form-group">
              <span style={{ opacity: "0.6", fontSize: "13px" }}>OD</span>
              <input
                type="date"
                name="from"
                class="form-control datepicker"
                style={{ width: "150px" }}
              />
              <i class="fas fa-angle-down  arrow"></i>
            </div>
          </div>

          <div className="col-sm-4">
            <div class="form-group">
              <span style={{ opacity: "0.6", fontSize: "13px" }}>DO</span>
              <input
                type="date"
                name="to"
                class="form-control datepicker"
                style={{ width: "150px" }}
              />
              <i class="fas fa-angle-down  arrow"></i>
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
              {this.state.movies.map(c => (
                <option value={c.user}>{c.user1}</option>
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
          <option value="foot">Foot</option>
          <option value="bike">Classic Bike</option>
          <option value="electric-bike">Electric Bike</option>
        </select>

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
          Report
        </button>
      </form>
    );
  }
}

export default Form;
