import React, { Component } from "react";
import DateForm from "../Electric/DateForm";
import config from "../config";
import Mapp from "./Map";
import Topbar1 from "../../Container/Layout/Topbar1";

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
        `${config.apiUrl.user}${this.props.match.params.pk}/`
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

                <th scope="col">Ilość przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Masa przesylek listiwych</th>
                {/* Adde New in api */}
                <th scope="col">Ilość paczek</th>
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
                  <td>{item.movingtime} hr</td>
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
        {/* <!-- Modal End --> */}
        <Mapp />
        {/* <!-- Modal End --> */}
      </div>
    );
  }
}

export default Udetails;
