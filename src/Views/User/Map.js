import React, { Component } from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
// import L from "leaflet";
import config from "../config";

import "leaflet/dist/leaflet.css";

class Mapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      lat: 12.92415,
      lng: 77.67229,
      zoom: 11,
      data: [
        {
          from_lat: "12.92415",
          from_long: "77.67229",
          id: "132512",
          to_lat: "12.92732",
          to_long: "77.63575"
        },
        {
          from_lat: "12.96691",
          from_long: "77.74935",
          id: "132513",
          to_lat: "12.92768",
          to_long: "77.62664"
        }
      ]
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(config.apiUrl.reportModel);
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng];

    // const from_lat = this.state.data.map(start => start.from_lat);
    // const to_lat = this.state.data.map(to => to.to_lat);

    // const from_long = this.state.data.map(start => start.from_long);
    // const to_long = this.state.data.map(to => to.to_long);
    // const center = [this.state.lat, this.state.lng];

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
                <h5
                  className="modal-title font-weight-bold text-dark"
                  id="exampleModalLabel"
                >
                  {" "}
                  MAPA{" "}
                </h5>
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
                      <label id="p"> UZYTKOWNIK</label>
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
                          <option value={c.pk}>{c.user1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <form>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label id="p"> DATA</label>
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

              {/* <Map
                center={center}
                zoom={this.state.zoom}
                style={{ marginTop: "30px" }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={markers} />
              </Map> */}
              <div id="map">
                <Map
                  style={{ height: "100vh", marginTop: "30px" }}
                  center={position}
                  zoom={this.state.zoom}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://rajrahul.pl" target="_blank">Rahul Raj</a> contributors'
                  />
                  {this.state.data.map(
                    ({ id, from_lat, from_long, to_lat, to_long }) => {
                      return (
                        <Polyline
                          key={id}
                          positions={[[from_lat, from_long], [to_lat, to_long]]}
                          color={"red"}
                        />
                      );
                    }
                  )}
                </Map>
              </div>

              <h6 className="text-center">WYNIKI DZIENNE</h6>
              <div className="row container">
                <div className="col-sm-3" style={{ marginBottom: "15px" }}>
                  <p style={{ textAlign: "center" }} id="p">
                    Typ dystrybucji
                  </p>
                  <h5 style={{ marginTop: "-10px" }}> EB</h5>
                </div>
                <div className="col-sm-3" style={{ marginBottom: "15px" }}>
                  <p style={{ textAlign: "center" }} id="p">
                    Dystans
                  </p>
                  <h5 style={{ marginTop: "-10px" }}>13 km</h5>
                </div>
                <div className="col-sm-3" style={{ marginBottom: "15px" }}>
                  <p style={{ textAlign: "center" }} id="p">
                    Czas aktywnosci
                  </p>
                  <h5 style={{ marginTop: "-10px" }}>4.5hr</h5>
                </div>
                <div className="col-sm-3" style={{ marginBottom: "15px" }}>
                  <p style={{ textAlign: "center" }} id="p">
                    Masa przesylek
                  </p>
                  <h5 style={{ marginTop: "-10px", marginBottom: "25px" }}>
                    13 Kg
                  </h5>
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
