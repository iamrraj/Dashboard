import React, { Component } from "react";
// import DeatilSummery from "./DeatilSummery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";
// import axios from 'axios'

export class Edetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  // Get Data from filter date
  getData = async e => {
    try {
      const from = e.target.elements.from.value;
      const to = e.target.elements.to.value;
      e.preventDefault();
      const res = await fetch(
        `${config.apiUrl.data}?too__lte=${to}&fromm__gte=${from}`
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

  async componentDidMount() {
    try {
      const res = await fetch(
        `${config.apiUrl.electric}${this.props.match.params.pk}/`
      );
      const movie = await res.json();
      // console.log(movie);
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  onClickRecomendation = async id => {
    this.props.history.push("/overview/" + id);
    window.location.reload();
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
          <a href="/electricbike" style={{ color: "black", fontSize: "16px" }}>
            {" "}
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "20px" }}
            ></i>
            &nbsp;{movie.label}
          </a>
          <table class="table table-hover " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col" className="t">
                  Id
                </th>
                <th scope="col" className="t" style={{ width: "250px" }}>
                  Data
                </th>
                <th scope="col" className="t">
                  User
                </th>
                <th scope="col" className="t">
                  Dystans
                </th>
                <th scope="col" style={{ width: "130px" }}>
                  Czas w ruchu
                </th>
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Llość przesylek listiwych</th>
                <th scope="col">Masa przesylek listiwych</th>
                <th scope="col">Llość paczek</th>
                <th scope="col">Masa paczek</th>
                <th scope="col">Zaoszczędzone CO2</th> {/* Adde New in api */}
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {movie.results.map(item => (
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.timestamp}</td>
                  <td>
                    <a
                      href="/user"
                      style={{ color: "#13B760" }}
                      class="font-weight-bold"
                    >
                      {item.user ? `${item.user}` : "User"}
                    </a>
                  </td>
                  <td>{item.milage} km</td>
                  <td>{item.movingtime} hr</td>
                  <td>{item.averagespeed} km/hr</td>
                  <td>{item.letters_number}</td>
                  <td>{item.packaged_weight} kg</td>
                  <td>{item.packages_number}</td>
                  <td>{item.kgtrasported} kg</td>
                  <td>{item.co2} mg</td>
                  <td>{item.additionalbox}</td>
                </tr>
              </tbody>
            ))}
            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>SUMMERY</strong>
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "120px" }}
                >
                  {movie.summery.total_milage
                    ? `${movie.summery.total_milage}`
                    : 0}
                  Km
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "160px" }}
                >
                  {movie.summery.total_movingtime
                    ? `${movie.summery.total_movingtime}`
                    : 0}
                  hr
                </th>

                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "170px" }}
                >
                  {movie.summery.total_averagespeed
                    ? `${movie.summery.total_averagespeed}`
                    : 0}
                  Km/hr
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter
                    ? `${movie.summery.total_letter}`
                    : 0}
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "120px" }}
                >
                  {movie.summery.total_ship_weight
                    ? `${movie.summery.total_ship_weight}`
                    : 0}
                  kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_pack ? `${movie.summery.total_pack}` : 0}
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "170px" }}
                >
                  {movie.summery.total_kg ? `${movie.summery.total_kg}` : 0}
                  kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_co2_save
                    ? `${movie.summery.total_co2_save}`
                    : 0}{" "}
                  Mg
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes
                    ? `${movie.summery.total_boxes}`
                    : 0}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Edetails;
