import React, { Component } from "react";
import DeatilSummery from "./DeatilSummery";
import DateForm from "../Electric/DateForm";
import { Map, TileLayer, CircleMarker, Marker, Popup } from "react-leaflet";
import Topbar1 from "../../Container/Layout/Topbar1";
import "leaflet/dist/leaflet.css";
import data from "./cities";

const position = [51.505, -0.09];

class Udetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://softbike.herokuapp.com/api/user/${this.props.match.params.pk}`
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
        `https://softbike.herokuapp.com/api/duser?too__lte=${to}&fromm__gte=${from}`
      );
      const user = await res.json();
      console.log(user);
      this.setState({
        user: user.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { movie } = this.state;
    if (movie === null) return <p>Loading ....</p>;
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
          <span id="span">Contact</span>
          <table class="table " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">
                  Id &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  Date &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  Distribution Type &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  Milage &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  Moving Time &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  KG Transported &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col">
                  Additional Boxex &nbsp;
                  <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            {movie.items.map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.dstrtype}</td>
                  <td>{item.milage} Km</td>
                  <td>{item.movingtime}</td>
                  <td>{item.kgtransported} Kg</td>
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
            <DeatilSummery />
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
        {/* <!-- Modal End --> */}

        {/* <!-- Modal For Map --> */}
        <div
          className="modal fade bd-example-modal-lg"
          id="eexampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
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
                      User
                      <input
                        type="text"
                        name="from"
                        className="form-control datepicker"
                        value={movie.user}
                        style={{ width: "150px", color: "#13B760" }}
                      />
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
                center={[-0.09, 51.505]}
                zoom={19}
                style={{ marginTop: "30px" }}
              >
                <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                  </Popup>
                </Marker>
                {/* {data.city.map(city => {
                  return (
                    <CircleMarker
                      center={[city["coordinates"][1], city["coordinates"][0]]}
                      radius={20 * Math.log(city["population"] / 10000000)}
                      fillOpacity={0.5}
                      stroke={false}
                      <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                        <span>{city["name"] + ": " + "Population" + " " + city["population"]}</span>
                      </Tooltip>
                    />
                  );
                })} */}
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Udetails;
