import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup
  // PropTypes as MapPropTypes
} from "react-leaflet";
import PropTypes from "prop-types";

class Mapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 45.6982642,
      lng: 9.6772698,
      zoom: 13,
      markers: [],
      movie: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/user/${this.props.match.params.pk}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:8000/api/1/deliveries/user/`);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie: movie.results
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {/* <!-- Modal For Map --> */}
        <div
          className="modal fade bd-example-modal-lg"
          id="eexampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title" id="exampleModalLabel">
                  {" "}
                  Map{" "}
                </h6>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row" style={{ marginBottom: "-40px" }}>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label> User</label>
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
                        {this.state.movie.map(c => (
                          <option value={c.user}>{c.user}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <form>
                    <div className="col-sm-6">
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
                  </form>
                </div>
              </div>

              <Map
                center={center}
                zoom={this.state.zoom}
                style={{ marginTop: "30px" }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={markers} />
              </Map>
              <h6 className="text-center">WYNIKI DZIENNE</h6>
              <div className="row container">
                <div className="col-sm-3">
                  <p>Typ dystrybucji</p>
                </div>
                <div className="col-sm-3">
                  <p>Dystans</p>
                </div>
                <div className="col-sm-3">
                  <p>Czas aktywnosci</p>
                </div>
                <div className="col-sm-3">
                  <p>Masa przesylek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mapp;
