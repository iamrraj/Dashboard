import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup
  // PropTypes as MapPropTypes
} from "react-leaflet";
import PropTypes from "prop-types";

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: "none" }}>{items}</div>;
};
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired
};

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
    const center = [this.state.lat, this.state.lng];

    const markers = [
      {
        key: "marker1",
        position: [45.69836455, 9.6472798],
        children: "Lampione rotto"
      },
      {
        key: "marker2",
        position: [45.6980459, 9.6872748],
        children: "Segnalazione: tombino rotto"
      },
      {
        key: "marker3",
        position: [45.69856455, 9.6570798],
        children: "Segnalazione: rumore di notte"
      }
    ];
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
                          <option value={c.user}>{c.user}</option>
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
