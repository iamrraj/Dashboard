import React, { Component } from "react";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";
import config from "../config";

export class Cdetails extends Component {
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
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `${config.apiUrl.classic}${this.props.match.params.pk}/`
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
          <a href="/classicbike" style={{ color: "black", fontSize: "16px" }}>
            {" "}
            <i
              class="fa fa-arrow-left fa-1x"
              aria-hidden="true"
              style={{ color: "#CCEFDC", height: "20px" }}
            ></i>{" "}
            {movie.bikeid}
          </a>
          <table class="table table-hover " style={{ marginTop: "20px" }}>
            <thead>
              <tr style={{ background: "#CCEFDC" }} className="thead1">
                <th scope="col">Lp</th>
                <th scope="col">Data</th>
                <th scope="col">Dystans</th>
                {/* <th scope="col" style={{ width: "140px" }}>
                  
                </th> */}
                <th scope="col">Średnia prędkość</th>
                <th scope="col">Llość przesylek listiwych</th>
                <th scope="col">Masa przesylek listiwych</th>
                <th scope="col">Llość paczek</th>
                <th scope="col">Masa paczek</th>
                <th scope="col">Liczba dobrań przesylek</th>
              </tr>
            </thead>
            {movie.detail.map(item => (
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.timestamp} </td>
                  <td>{item.milage} km</td>
                  {/* <td>{item.movingtime}</td> */}
                  <td>{item.averagespeed} km/hr</td>
                  <td>{item.letters_number}</td>
                  <td>{item.packaged_weight} kg</td>
                  <td>{item.packages_number}</td>
                  <td>{item.kgtrasported} kg</td>
                  <td>{item.additionalbox}</td>
                </tr>
              </tbody>
            ))}

            <thead>
              <tr className="thead">
                <th scope="col"></th>
                <th scope="col" className="text-dark th">
                  <strong>Summery</strong>
                </th>
                <th
                  scope="col"
                  className="text-dark th"
                  style={{ width: "100px" }}
                >
                  {movie.summery.total_milage} Km
                </th>

                <th scope="col" className="text-dark th">
                  {movie.summery.total_averagespeed} Km/hr
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_letter}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_ship_weight} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_pack}
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_kg} kgs
                </th>
                <th scope="col" className="text-dark th">
                  {movie.summery.total_boxes}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Cdetails;
