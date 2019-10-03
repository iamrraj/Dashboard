import React, { Component } from "react";
import PropTypes from "prop-types";
import DateForm from "../Electric/DateForm";
// import Leaflet from "leaflet";
// import Mapp from "./Map";
import Topbar1 from "../../Container/Layout/Topbar1";
import {
  Map,
  TileLayer,
  Marker,
  Popup
  // PropTypes as MapPropTypes
} from "react-leaflet";

// import data from "./cities";

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
// const position = [51.505, -0.09];

class Udetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      lat: 45.6982642,
      lng: 9.6772698,
      zoom: 13,
      markers: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/user/${this.props.match.params.pk}/`
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

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `http://localhost:8000/api/1/deliveries/data/?too__lte=${to}&fromm__gte=${from}`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movie } = this.state;
    if (movie === null) return <p>Loading ....</p>;
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
      <div className="container" style={{ marginTop: "20px" }}>
        <DateForm loaddata={this.getData} />
        <Topbar1 />
        <div
          className="bg-white"
          style={{ padding: "15px", borderTop: "2px solid #CCEFDC" }}
        >
          <a href="/user" style={{ color: "black", fontSize: "16px" }}>
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "29px" }}
            ></i>
            &nbsp; {movie.user}{" "}
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i
            className="fa fa-mobile-alt fa-2x"
            style={{ color: "rgba(19, 183, 96, 1.0)", opacity: "0.6" }}
            data-toggle="modal"
            data-target="#exampleModalCenter"
          ></i>
          <br></br>
          {/* <span id="span">Contact</span> */}
          <table class="table " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Lp
                </th>
                <th scope="col" className="t" style={{ width: "130px" }}>
                  Data
                </th>
                <th scope="col" className="t" style={{ width: "130px" }}>
                  Typ dystrybucji
                </th>
                <th scope="col" className="t">
                  Dystans
                </th>
                <th scope="col">Czas w ruchu</th>

                <th scope="col">Llość przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Masa przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Llość paczek</th>
                <th scope="col">Masa paczek</th>
                <th scope="col">Liczba dobrań przesylek</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {movie.results.map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.timestamp}</td>
                  <td>{item.mode}</td>
                  <td>{item.milage} Km</td>
                  <td>{item.movingtime}</td>
                  <td>{item.letteritems}</td>
                  <td>{item.shipweight} Kg</td>
                  <td>{item.package}</td>
                  <td>{item.kgtrasported} Kg</td>
                  <td>{item.additionalbox}</td>
                  <td data-toggle="modal" data-target="#eexampleModal">
                    <i
                      className="fa fa-map"
                      style={{
                        color: "rgba(19, 183, 96, 1.0)",
                        opacity: "0.6",
                        fontSize: "19px"
                      }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
            {/* <DeatilSummery /> */}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>Summery</strong>
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_milage} Km
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_movingtime}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_ship} Kg
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_package}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_kg} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes}
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
          </table>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  User: <strong>{movie.user}</strong>
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h3 className="text-center">
                  {" "}
                  Contact Number: <strong>{movie.phone} </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <Mapp /> */}
        {/* <!-- Modal End --> */}
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
                      <div className="form-group">{movie.user}</div>
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
      </div>
    );
  }
}

export default Udetails;
