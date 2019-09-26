import React, { Component } from "react";
import DeatilSummery from "./DeatilSummery";
import DateForm from "../Electric/DateForm";
import Topbar1 from "../../Container/Layout/Topbar1";

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
        `https://softbike.herokuapp.com/api/cdbike?too__lte=${to}&fromm__gte=${from}`
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
        `https://softbike.herokuapp.com/api/cbike/${this.props.match.params.pk}`
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
            {movie.items.map(item => (
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.date} </td>
                  <td>{item.milage} Km</td>
                  {/* <td>{item.movingtime}</td> */}
                  <td>{item.averagespeed} km/hr</td>
                  <td>{item.letteritems}</td>
                  <td>{item.shipweight} kgs</td>
                  <td>{item.package}</td>
                  <td>{item.kgtrasported} Kg</td>
                  <td>{item.additionalbox}</td>
                </tr>
              </tbody>
            ))}

            <DeatilSummery />
          </table>
        </div>
      </div>
    );
  }
}

export default Cdetails;
